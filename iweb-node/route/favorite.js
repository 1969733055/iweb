const express = require("express");
const pool = require("../pool");
const router = express.Router();

// 添加收藏 /favorite/add
router.post("/add", function(req,res){
  var obj = req.body;
  if (!obj.uid) {
    res.json({code:301, msg: "uid is required"});
    return;
  }
  if (!obj.cid){
    res.json({code:302, msg: "cid is required"});
    return;
  }

  // 以秒为单位的时间戳
  var fTime = Math.ceil((new Date()).getTime()/1000);
  let sql = "INSERT INTO favorite (userId,courseId,fTime) VALUES (?,?,?)";
  pool.query(sql, [obj.uid, obj.cid, fTime], (err, result)=>{
    if (err) throw err;
    console.log(result);
    if (result.affectedRows > 0) {
      res.json({
        code:200, 
        msg: "success", 
        data:{
          fid:result.insertId
        }
      });
    } else {
      res.json({code:303, msg: "failed"});
    }
  });
});

module.exports=router;