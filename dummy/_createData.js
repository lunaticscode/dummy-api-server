const { DB_TABLE } = require("../constants");
const db_connection = require("../db_init");
const {
  getLicenseAuthData,
  getLicenseIndexData,
  getLicenseDeployData,
} = require("./license");

const DEFAULT_INSERT_CNT = 100;

const _createData = async (table, param) => {
  const mapTableToFunc = {
    license_auth: await _createLicenseAuthData(param),
    license_index: await _createLicenseIndexData(param),
    license_deploy: await _createLicenseDeployData(param),
  };
  return mapTableToFunc[table]();
};

const _createLicenseAuthData = async (param) => {
  const dummyDataList = getLicenseAuthData(DEFAULT_INSERT_CNT);
  const resultList = [];
  for (let data of dummyDataList) {
    const insertResult = await _execInsertQuery(DB_TABLE.LICENSE_AUTH, data);
    resultList.push(insertResult);
  }
  return resultList.some((res) => false) ? false : true;
};

const _createLicenseIndexData = async (data) => {
  const dummyDataList = getLicenseIndexData(DEFAULT_INSERT_CNT);
  const resultList = [];
  for (let data of dummyDataList) {
    const insertResult = await _execInsertQuery(DB_TABLE.LICENSE_INDEX, data);
    resultList.push(resultList);
  }
  return resultList.some((res) => false) ? false : true;
};

const _createLicenseDeployData = async (data) => {
  const dummyDataList = getLicenseDeployData(DEFAULT_INSERT_CNT);
  const resultList = [];
  for (let data of dummyDataList) {
    const insertResult = await _execInsertQuery(DB_TABLE.LICENSE_DEPLOY, data);
    resultList.push(resultList);
  }
  return resultList.some((res) => false) ? false : true;
};

/**
 * @param {string} tbName 테이블 이름
 * @param {any} data insertData
 */
const _execInsertQuery = async (tbName, data) => {
  return await new Promise((resolve, _) => {
    try {
      const prefix_sql = `insert into ${tbName} set ? `;
      db_connection.query(prefix_sql, data, (err, res, field) => {
        if (err) {
          console.log({ err });
          resolve(false);
          return db_connection.end();
        }
        resolve(true);
        return db_connection.end();
      });
    } catch (err) {
      console.log(err);
      resolve(false);
      return db_connection.end();
    }
  });
};

module.exports = {
  _createData,
};
