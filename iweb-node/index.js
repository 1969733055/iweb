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

// 声明路由
app.get("/hello", (req, res) => {
  res.send("Hello Iweb");
});

// 引入路由
const teacherRouter = require("./route/teacher.js");
const indexRouter = require("./route/index.js");
const userRouter = require("./route/user.js");

// /teacher/list       讲师列表
// /teacher/add        添加讲师
// /teacher/info?tid=2 讲师详情
// teacherRouter中的路由都会加上teacher前缀
app.use("/teacher", teacherRouter);
app.use("/", indexRouter);
app.use("/user", userRouter);