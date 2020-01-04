const express = require("express");

const bodyParser = require('body-parser');

var app = express();
// 新浪云的Node服务器只能监听5050端口
app.listen(5050);
console.log("Server is listening 5050");

// 注册body-parser为中间件
// false 使用querystring来解析数据
// true  使用qs来解析数据(不推荐)
app.use(bodyParser.urlencoded({extended: false}));

// node 跨越

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});

// 引入路由
const teacherRouter = require("./route/teacher.js");
const indexRouter = require("./route/index.js");
const userRouter = require("./route/user.js");
const typeRouter = require("./route/type.js");
const courseRouter = require("./route/course.js");
const cartRouter = require("./route/cart.js");
const favoriteRouter = require("./route/favorite.js");

// /teacher/list       讲师列表
// /teacher/add        添加讲师
// /teacher/info?tid=2 讲师详情
// teacherRouter中的路由都会加上teacher前缀
app.use("/teacher", teacherRouter);
app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/type", typeRouter);
app.use("/course", courseRouter);
app.use("/cart", cartRouter);
app.use("/favorite", favoriteRouter);