const API_PATH = {
  AUTH: "api-auth",
  HOME: {
    DASHBOARD: "api-home-dashboard",
  },
  LICENSE: {
    AUTH: "api-license-auth",
    INDEX: "api-license-index",
    DEPLOY: "api-license-deploy",
  },
  APIMANAGE: {
    ISSUE: "api-apimanage-issue",
    SETTING: "api-apimanage-setting",
  },
  CUSTOMER: {
    INDEX: "api-customer-index",
  },
  SETTING: {
    ACCOUNT: "api-setting-account",
    INDEX: "api-setting-index",
    NOTIFY: "api-setting-notify",
  },
  STATISTICS: {
    INDEX: "api-statistics-index",
  },
  WEB: {
    MALWARE: "api-web-malware",
  },
};

const VALID_EMAIL_DOMAINS = [
  "estsecurity.com",
  "estsoft.com",
  "estgames.com",
  "zuminternet.com",
];

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

const DB_TABLE = {
  LICENSE_AUTH: "license_auth",
  LICENSE_INDEX: "license_index",
  LICENSE_DEPLOY: "license_deploy",
};

module.exports = {
  API_PATH,
  VALID_EMAIL_DOMAINS,
  MAP_FUNC_TO_MENU,
  DB_TABLE,
};
