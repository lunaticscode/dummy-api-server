const { MAP_FUNC_TO_MENU } = require("../constants");

const PREFIX_TI_ADMIN_CODE = "01";

const authList = Object.values(MAP_FUNC_TO_MENU).reduce(
  (acc, cur) => [...acc, ...cur],
  []
);

const generateDummyCode = () => {
  let dummyCodeFromServer = "";
  for (let i = 0; i < authList.length; i++) {
    dummyCodeFromServer = dummyCodeFromServer + Math.floor(Math.random() * 2);
  }
  return dummyCodeFromServer;
};

const getAdminAuthCode = () => {
  return PREFIX_TI_ADMIN_CODE + generateDummyCode();
};

module.exports = {
  generateDummyCode,
  getAdminAuthCode,
};
