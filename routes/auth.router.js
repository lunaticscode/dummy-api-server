const express = require("express");
const router = express.Router();
const { getAdminAuthCode } = require("../services/auth.service");

router.get("/", async (req, res) => {
  console.log("auth router");
  const resultData = getAdminAuthCode();
  return res.status(200).json({ data: resultData, isError: false });
});

module.exports = router;
