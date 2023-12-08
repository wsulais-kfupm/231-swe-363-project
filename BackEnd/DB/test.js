// //ignore plz
// const postgres = require("postgres")
// const dbcontrol= require("./DBcontroller")
// const { Client } = require('pg')
// const client = new Client({
//   user: 'postgres',
//   host: 'db.lkznjhybavmqwpszumqk.supabase.co',
//   database: 'postgres',
//   password: 'SWE363Project.',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// // client.query(`CREATE Table Brand(
// // 	Bname_slug TEXT PRIMARY Key
// // );`)

// // queries=`
// // CREATE table Notified(
// // Cookie_ID text,
// // Var_ID INTEGER,
// // FOREIGN key(Var_ID) REFERENCES Product_Variant(Var_ID),
// // FOREIGN key(Cookie_ID) REFERENCES webUser(Cookie_ID)
// // );`

// // q=(queries.split(';'))
// // for(let i=0;i<q.length;i++){
// //      client.query(q[i]+';')
// // }

//  dbcontrol.table('brand').then((date)=> console.log(date))
const express = require("express");
const app = express();
db=require('./DBcontroller')
app.get('/:sub',(req,res)=>{
    db.pushNotification('1231231313').then((data)=>{
      console.log(data)
    })
})
app.listen(3000)