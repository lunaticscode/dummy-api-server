const { faker } = require("@faker-js/faker");

const _setLicenseLevel = (index) => {
  const mapIndexToLevel = {
    0: "public",
    1: "free",
    2: "standard",
    3: "monthly_standard",
    4: "premium",
  };
  return mapIndexToLevel[index];
};

const DEFAULT_ITEM_CNT = 50;

const getLicenseAuthDataCount = () => {
  return Math.floor(Math.random() * 30) + 50;
};
const getLicenseIndexDataCount = () => {
  return Math.floor(Math.random() * 30) + 50;
};
const getLicenseDeployDataCount = () => {
  return Math.floor(Math.random() * 30) + 50;
};

const _getTmpDate = () => {
  return new Date(
    new Date().getTime() + Math.floor(Math.random() * 10000000) + 12000000
  );
};

const getLicenseAuthData = (cnt = DEFAULT_ITEM_CNT) => {
  return new Array(cnt).fill(0).map((_, index) => {
    const createdAt = _getTmpDate();
    const updatedAt = new Date(
      createdAt.getTime() + Math.floor(Math.random() * 1000000) + 10000
    );
    return {
      id: faker.datatype.uuid(),
      no: index + 1,
      licenseFlag: index % 5 > 2 ? true : false,
      licenseLevel: _setLicenseLevel(Math.floor(Math.random() * 5)),
      requestLimit: Math.floor(Math.random() * 900) + 100,
      createdAt,
      updatedAt,
      authProvider: faker.name.firstName(),
    };
  });
};

const _setLicenseProdType = (index) => {
  const mapIndexToProd = {
    0: "ti",
    1: "edr",
  };
  return mapIndexToProd[index];
};

const getLicenseIndexData = (cnt = DEFAULT_ITEM_CNT) => {
  return new Array(cnt).fill(0).map((_, index) => {
    const createdAt = _getTmpDate();
    const remainDays = Math.floor(Math.random() * 200) + 20;
    const expiredAt = new Date(
      createdAt.getTime() + remainDays * 3600 * 24 * 1000
    );
    return {
      id: faker.datatype.uuid(),
      no: index + 1,
      licenseKey: nanoid(),
      prodType: _setLicenseProdType(Math.floor(Math.random() * 2)),
      remainDays,
      createdAt,
      expiredAt,
      provider: faker.name.firstName(),
    };
  });
};

const _setLicenseVersion = (index) => {
  const mapIndexToVersion = {
    0: "3.1.1.0",
    1: "3.1.1.1",
    2: "3.1.1.2",
    3: "3.1.1.3",
    4: "3.1.1.4",
    5: "3.1.1.5",
  };
  return mapIndexToVersion[index];
};

const getLicenseDeployData = (cnt = DEFAULT_ITEM_CNT) => {
  return new Array(cnt).fill(0).map((_, index) => {
    const deployedAt = _getTmpDate();
    return {
      id: faker.datatype.uuid(),
      no: index + 1,
      version: _setLicenseVersion(Math.floor(Math.random() * 6)),
      isAuto: index % 5 > 2 ? true : false,
      deployedAt,
    };
  });
};

module.exports = {
  getLicenseAuthDataCount,
  getLicenseIndexDataCount,
  getLicenseDeployDataCount,
  getLicenseAuthData,
  getLicenseIndexData,
  getLicenseDeployData,
};
