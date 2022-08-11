const MAP_FUNC_TO_MENU = {
  LICENSE: [
    "read",
    "create",
    "update",
    "delete",
    "issue",
    "deploy",
    "download",
  ],
  APIMANAGE: [
    "read",
    "create",
    "update",
    "delete",
    "deploy",
    "setting",
    "download",
  ],
  STATISTIC: ["read", "create", "update", "delete", "download"],
  CUSTOMER: ["read", "create", "update", "delete", "download"],
  WEB: ["read", "create", "update", "delete", "automate"],
  SETTING: ["read", "worker-regist", "automate", "update", "delete"],
  ACCOUNT: ["read", "create", "update", "delete"],
  NOTIFY: ["read", "update", "delete"],
};

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
  getAdminAuthCode,
};
