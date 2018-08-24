/* 'Import Cost' extention calculation */
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: "server working"
  });
});

module.exports = app;
