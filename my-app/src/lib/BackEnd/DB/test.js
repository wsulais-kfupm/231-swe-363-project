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
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname));

db = require('./DBcontroller');
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/test.html');
});
app.post('/insert', (req, res) => {
	const subscription = req.body;
	console.log(subscription);
	db.addEndPoint(subscription).then(console.log('endpoint added'));
});
app.get(`/doit`, (req, res) => {
	db.psuhAllNotifications();
});
db.psuhAllNotifications();
app.listen(3001);
