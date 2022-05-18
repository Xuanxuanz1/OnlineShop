const express = require("express");
const cors = require("cors");

var list = {};
var itemlist = {};
var orderlist = {};
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "onlineshop",
});

connection.commit();

connection.query("SELECT * FROM user", function (erro, result) {
  list = result;
});

connection.query("SELECT * FROM itemlist",function(erro,result){
  itemlist = result
});

connection.query("SELECT * FROM orderlist",function(erro,result){
  orderlist = result;
});

 var sql = "INSERT INTO user(uid,username,password,emile,sex,address,birth) VALUSE(0,?,?,?,?,?,?)";

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(list);
});

app.get("/itemlist",(req,res)=>{
  res.send(itemlist)
});

app.get("/orderlist",(req,res)=>{
  res.send(orderlist)
})




app.listen(8000, () => {
  console.log("listen to http://localhost:8000");
});

// http.createServer(function (req,res){
//     res.writeHead(200,{'Content-Type':'apqplication/json'});

//     const method = req.method;

//     const resDate = {
//         list
//     }

//     if(method==='GET'){
//         res.end(JSON.stringify(resDate))
//     };

//     if(method === 'POST'){
//         let postData = '';
//         req.on('data',chunk =>{
//             postData += chunk.toString();
//         })
//         req.end('end',()=>{
//             resDate.postData = postData;

//             res.end(
//                 JSON.stringify(resDate)
//             )
//         })
//     }

// }).listen(8000)

// connection.end()
