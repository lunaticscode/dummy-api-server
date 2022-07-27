const express = require("express");
const router = express.Router();
const { getLicenseAuthData } = require("../dummy/license");

router.get("/", (req, res) => {
  return res.status(200).json({ result: getLicenseAuthData() });
});

module.exports = router;
