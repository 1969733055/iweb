const express = require("express");
const pool = require("../pool");
// 创建路由器对象
const router = express.Router();

// 用户注册
router.post("/register", (req,res)=>{
  // 获取(表单)提交数据
  var obj = req.body;
  console.log(obj);

  // 检测用户名是否为空
  if (!obj.uname) {
    res.json({code:401,msg:"uname required"});
  }
  // 检测密码是否为空
  if (!obj.upwd) {
    res.json({code:402,msg:"upwd required"});
  }
  // 检测重复密码是否为空
  if (!obj.upwd2) {
    res.json({code:403,msg:"upwd2 required"});
  }
  // 检测重复密码是否为空
  if (!obj.phone) {
    res.json({code:404,msg:"phone required"});
  }
  // 检测手机号的合法性(正则)
  var pt = /^1[3-9]\d{9}$/;
  if (!pt.test(obj.phone)) {
    res.json({code:405,msg:"手机号格式非法"});
  }

  // 检测两次输入的密码是否一致
  if (obj.upwd != obj.upwd2) {
    res.json({code:406,msg:"两次输入的密码不一致,请重新输入"});
  }

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
router.post("/login", (req,res) => {
  // 接收表单提交的数据
  var obj=req.body;

  // 检测用户名是否为空
  if (!obj.uname) {
    res.json({code:401,msg:"uname required"});
  }
  // 检测密码是否为空
  if (!obj.upwd) {
    res.json({code:402,msg:"upwd required"});
  }

  // 查询语句
  let sql = "SELECT * FROM user WHERE uname=? AND upwd=? LIMIT 1";
  pool.query(sql, [obj.uname,obj.upwd], (err, result)=>{
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.json({code:200, msg: "success", data: result[0]});
    } else {
      res.json({code: 301, msg:"no user"});
    }
  });
});

// 检测用户名是否存在
router.post("/check_uname", (req,res)=>{
  var obj=req.body;
  if (!obj.uname) {
    res.json({code: 300, msg:"uname is required"});
  }
  // 查询语句
  let sql = "SELECT count(*) as num FROM user WHERE uname=?";
  pool.query(sql, [obj.uname], (err,result)=>{
    if (err) throw err;
    console.log(result);
    // console.log(result.num); // undefined
    if (result[0].num > 0) {
      res.json({code:301,msg:"user exists"});
    } else {
      res.json({code:200,msg:"user does not exist"});
    }
  });
});

// 模块导出
module.exports=router;