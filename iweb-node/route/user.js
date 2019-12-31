const express = require("express");
const pool = require("../pool");
// 创建路由器对象
const router = express.Router();

// 用户注册
router.post("/register", (req,res)=>{
  // 获取(表单)提交数据
  var obj = req.body;
  console.log(obj);
  // todo: 比较两次输入的密码是否一致?
  // 比较完成后需要删除upwd2
  delete obj.upwd2;
  // 将接受到的数据插入到user表中
  var sql = "INSERT INTO user SET ?";
  pool.query(sql,[obj], (err, result)=>{
    if (err) throw err;
    console.log(result);
    res.json({
      code:200,
      msg:"success",
      data:{
        uid:result.insertId,uname:obj.uname
      }
    });
  });
});
// 用户登录
router.post("/login",(req,res)=>{
  var obj=req.body;
  var sql="SELECT uid FROM user WHERE uname=? AND upwd= ? ";
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    console.log(result);
  })

})


// 模块导出
module.exports=router;