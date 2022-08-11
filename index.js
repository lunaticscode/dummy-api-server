const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3001;
const authMiddleware = require("./middlewares/auth.middleware");
const authRouter = require("./routes/auth.router");
const apimgmtRouter = require("./routes/apimgmt.router");
const licenseRouter = require("./routes/license.router");
const { STATIC_PATHNAME } = require("./constants");

app.use(cors());
app.use(express.json());
app.use(express.static(STATIC_PATHNAME));
app.use(authMiddleware);

app.use("/api/auth", authRouter);
app.use("/api/license", licenseRouter);
app.use("/api/apimgmt", apimgmtRouter);

// app.use("*", (req, res) => {
//   return res.status(404).json({ data: null });
// });

app.listen(PORT, () => {
  console.log(`Express running on ${PORT}`);
});

module.exports = app;
