const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("sum", {
    title: "Sum",
  });
});

router.post("/", (req, res, next) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = +num1 + +num2;

  res.render("result", {
    title: "Result",
    num1: num1,
    num2: num2,
    result: result,
  });
});
module.exports = router;
