const express = require("express");
const pool = require("../pool");
const router = express.Router();

// 课程列表路由 /course/list
router.get("/list", function(req,res){
  // 接收get请求的参数 req.query
  var obj = req.query;
  // 判断有没有curPage参数
  if (!obj.curPage) {
    obj.curPage = 1;
  }
  // 判断有没有pageSize参数
  if (!obj.pageSize) {
    obj.pageSize = 3;
  }

  // 查看总的记录数
  let sql = "SELECT count(*) as num FROM course";
  pool.query(sql, (err, result)=>{
    if (err) throw err;
    let total = result[0].num; // 总的记录数
    // 总页数
    let pageTotal = Math.ceil(total/obj.pageSize);
    // 查询的起始位置
    let offset = (obj.curPage-1)*obj.pageSize;

    // 执行分页查询
    let sql = "SELECT * FROM course LIMIT ?,?";
    pool.query(sql, [offset, obj.pageSize], (err, result)=>{
      if (err) throw err;
      console.log(result);
      res.json({
        code:200, 
        msg:"success", 
        data: {
          list: result,
          total: total,
          pageTotal: pageTotal,
          pageSize: obj.pageSize,
          curPage: obj.curPage
        }
      });
    });
  });
  console.log(req.query);
});

module.exports=router;