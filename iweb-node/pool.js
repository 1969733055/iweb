// 引入mysql模块
const mysql = require("mysql");
// 创建数据库连接池
var pool = mysql.createPool({
  host: "127.0.0.1",    // 主机名
  port: "3306",         // 端口号
  user: "root",         // 用户名
  password: "",         // 密码
  database: "iweb", // 数据库名
  connectionLimit: 10   // 连接池中的连接数
});

// 导出数据库连接池
module.exports=pool;