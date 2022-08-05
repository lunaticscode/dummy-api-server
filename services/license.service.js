const { DB_TABLE } = require("../constants");
const db_connection = require("../db_init");

const getLicenseAuthData = async (param) => {
  return await _execSelectQuery(DB_TABLE.LICENSE_AUTH, param);
};
const getLicenseIndexData = async () => {
  return await _querySelectLicenseIndex(DB_TABLE.LICENSE_INDEX, param);
};
const getLicenseDeployData = async () => {
  return await _querySelectLicenseDeploy(DB_TABLE.LICENSE_DEPLOY, param);
};

const _execSelectQuery = async (tbName, param) => {
  return await new Promise((resolve, _) => {
    const startDate =
      typeof param === "object" ? param.startDate || new Date() : new Date();
    const endDate =
      typeof param === "object"
        ? param.endDate || new Date(new Date().getTime() + 3600 * 1000 * 24 * 7)
        : new Date(new Date().getTime() + 3600 * 1000 * 24 * 7);
    const limitCnt = param.limitCnt || 10;
    try {
      db_connection.query(
        `Select * from ${tbName} Where startDate > ${startDate} and endDate < ${endDate} limit ${limitCnt};`,
        (err, rows, fields) => {
          if (err) {
            console.log({ err });
            return resolve({ isError: true });
          }
          return resolve({ isError: false, data: rows });
        }
      );
    } catch (err) {
      console.log({ err });
      return resolve({ isError: true });
    }
  });
};

module.exports = {
  getLicenseAuthData,
  getLicenseDeployData,
  getLicenseIndexData,
};
