const express = require("express");
const router = express.Router();
const { getApimanageIssueData } = require("../dummy/apimgmt");

router.get("/", (req, res) => {
  return res.status(200).json({ result: getApimanageIssueData() });
});

module.exports = router;
