const express = require("express");

const appRouter = express();

appRouter.use("/sum", require("./sum.router"));

appRouter.use("/", (req, res, next) => {
  res.render("notFound", {
    title: "Not Found",
  });
});

module.exports = appRouter;
