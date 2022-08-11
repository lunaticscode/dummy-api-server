const express = require("express");
const router = express.Router();
const { getLicenseService } = require("../services/license.service");

router.get("/:type", async (req, res) => {
  const type = req.params.type || "";
  const query = req.query || {};
  console.log({ type, query });
  try {
    const data = await getLicenseService(type)(query);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ isError: true });
  }
});

module.exports = router;
