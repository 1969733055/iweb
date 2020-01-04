const express = require("express");
const pool = require("../pool");
const router = express.Router();

// 课程分类路由 /type/
router.get("/", function(req,res){
  var sql = "SELECT * FROM type";
  pool.query(sql, (err, result)=>{
    if (err) throw err;
    res.json({
      code:200,
      msg:"success", 
      data: result
    });
  });
});

module.exports=router;