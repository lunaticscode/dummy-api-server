const { DB_TABLE } = require("../constants");
const db_connection = require("../db_init");

const getLicenseService = (type) => {
  const mapTypeToService = {
    auth: () => _getLicenseAuthData,
    index: () => _getLicenseIndexData,
    deploy: () => _getLicenseDeployData,
  };
  return mapTypeToService[type]();
};

const _getLicenseAuthData = async (param) => {
  return await _execSelectQuery(DB_TABLE.LICENSE_AUTH, param);
};
const _getLicenseIndexData = async (param) => {
  return await _execSelectQuery(DB_TABLE.LICENSE_INDEX, param);
};
const _getLicenseDeployData = async (param) => {
  return await _execSelectQuery(DB_TABLE.LICENSE_DEPLOY, param);
};

const makeSufixSql = (param) => {
  if (typeof param !== "object") return "";
  let sufixSql = "";

  Object.keys(param).forEach((key) => {
    sufixSql = sufixSql + `and ${key} = ?`;
  });
  return sufixSql;
};

const TEST_START_DATE_STRING = "2022-08-01";
const DEFAULT_LIMIT_CNT = 10;
const _execSelectQuery = async (tbName, param) => {
  return await new Promise((resolve, _) => {
    const startDate =
      typeof param === "object"
        ? param.startDate || new Date(TEST_START_DATE_STRING)
        : new Date(TEST_START_DATE_STRING);
    const endDate =
      typeof param === "object"
        ? param.endDate || new Date(startDate.getTime() + 3600 * 1000 * 24 * 7)
        : new Date(startDate.getTime() + 3600 * 1000 * 24 * 7);
    const _limitStart = param.pageIndex * 10;
    const _limitCnt = DEFAULT_LIMIT_CNT;
    delete param.startDate;
    delete param.endDate;
    delete param.pageIndex;
    const _params = [startDate, endDate, ...Object.values(param)];
    const prefixSql = `Select * from ${tbName} Where createdAt >= ? and createdAt <= ? ${makeSufixSql(
      param
    )} order by createdAt DESC limit ${_limitStart}, ${_limitCnt};`;
    console.log(prefixSql);
    try {
      db_connection.query(prefixSql, _params, (err, rows, fields) => {
        if (err) {
          console.log({ err });
          return resolve({ isError: true });
        }
        return resolve({ isError: false, data: rows });
      });
    } catch (err) {
      console.log({ err });
      return resolve({ isError: true });
    }
  });
};

module.exports = {
  getLicenseService,
};
