
//모듈
const express = require("express");
const app = express();



//라우팅
const home = require("./routes/home");

//앱 셋팅
app.set("views", "./views");
app.set("view engine", 'ejs');


app.use("/", home) //미들웨어를 등록하는 메소드

module.exports = app;