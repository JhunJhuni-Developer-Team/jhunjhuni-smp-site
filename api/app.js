const express = require("express");
const app = express();
const apiRoutes = require("./routes/api.route");
app.use("/api", apiRoutes);

module.exports = app;
