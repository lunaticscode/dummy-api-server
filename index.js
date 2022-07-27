const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 6666;
const apimgmtRouter = require("./routes/apimgmt.router");
const licenseRouter = require("./routes/license.router");

app.use(cors());
app.use(express.json());

app.use("/api/license", licenseRouter);
app.use("/api/api-manange", apimgmtRouter);

app.listen(PORT, () => {
  console.log(`Express running on ${PORT}`);
});

module.exports = app;
