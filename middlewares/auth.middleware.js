require("dotenv").config();
const path = require("path");
const { STATIC_PATHNAME } = require("../constants");
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {import("express").NextFunction} next
 */
module.exports = (req, res, next) => {
  const header = req.headers;
  const token = header["es-ti-token"] || null;
  if (!token || token !== process.env.API_TOKEN) {
    console.log("Disallow this origin", header.origin);
    return res.sendFile(
      path.join(__dirname, "../", STATIC_PATHNAME, "prevent.html")
    );
  }
  next();
};
