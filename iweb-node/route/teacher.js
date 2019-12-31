const express = require("express");
const pool = require("../pool");
// 创建路由器对象
const router = express.Router();

// 讲师列表 /teacher/list
router.get("/list", (req, res) => {
  // 把数据库中的讲师查询出来
  let sql = "SELECT * FROM teacher";
  pool.query(sql, (err, result)=>{
    if (err) throw err;
    console.log(result);
    // 将取到的数据返回给调用端
    res.json({
      code: 200,      // 错误(状态)码
      msg:"success",  // 消息 
      data:result     // 数据
    });
  });
  // res.send("Hello Teacher");
});
// 讲师详情
// 添加讲师

// 模块导出
module.exports=router;