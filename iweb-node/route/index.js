const express = require("express");

const router = express.Router();

// 首页路由 /
router.get("/", function(req,res){
  res.send("这里是首页");
});

module.exports=router;