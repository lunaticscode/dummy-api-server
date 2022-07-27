const { faker } = require("@faker-js/faker");

const _getTempDate = () => {
  return new Date(
    new Date().getTime() + Math.floor(Math.random() * 10000000) + 12000000
  );
};
const DEFAULT_ITEM_CNT = 50;

const getApimanageIssueDataCount = () => {
  return Math.floor(Math.random() * 30) + 50;
};

const getApimanageSettingDataCount = () => {
  return Math.floor(Math.random() * 30) + 50;
};

const getApimanageIssueData = (cnt = DEFAULT_ITEM_CNT) => {
  return new Array(cnt).fill(0).map((_, index) => {
    const createdAt = _getTempDate();
    const updatedAt = new Date(
      createdAt.getTime() + Math.floor(Math.random() * 1000000) + 10000
    );
    const expiredAt = new Date(
      createdAt.getTime() +
        Math.floor(Math.random() * 5000000) +
        3600 * 1000 * 24 * (Math.random() * 50 + 30)
    );
    return {
      id: faker.datatype.uuid(),
      no: index + 1,
      apiKey: faker.datatype.uuid(),
      requestCount: Math.floor(Math.random() * 1000) + 103,
      operationStatus: index % 5 > 2 ? true : false,
      createdAt,
      updatedAt,
      expiredAt,
    };
  });
};

const getApimanageSettingData = () => {
  return [{}];
};

module.exports = {
  getApimanageIssueDataCount,
  getApimanageSettingDataCount,
  getApimanageIssueData,
  getApimanageSettingData,
};
