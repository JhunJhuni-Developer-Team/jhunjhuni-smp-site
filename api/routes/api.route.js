const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: `Success`, status: "OK", statusCode: res.statusCode });
});

router.get("/get-data", (req, res) => {
  res.send("-,-");
});

module.exports = router;
