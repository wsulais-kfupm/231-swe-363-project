const postgres = require("postgres")

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'db.lkznjhybavmqwpszumqk.supabase.co',
  database: 'postgres',
  password: 'SWE363Project.',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// get all elements in a table

async function table(table){
    return new Promise(function (resolve) {
        client.query(`SELECT * FROM ${table};`,(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}
// get all prices of a single product

async function priceforproduct(productname){
    return new Promise(function (resolve) {
        client.query(`SELECT Price,currency,variant_slug from priceforproduct where product_slug=${productname}`,(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}
// get all variants of a product

async function productVariant(product){
    return new Promise(function (resolve) {
        client.query(`SELECT * from Product_Variant where product_slug = "${product}"`,(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}
// get all prices of a single variant
async function variantPrices(product,variantName){
    return new Promise(function (resolve) {
        client.query(`SELECT price,currency from product_Pricing where listing_ID in (select listing_ID from product_listing where varid in (select Var_ID from Product_Variant where variant_slug ='${variantName}' AND product_slug="${product}" ));`,(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}
//insert cookie
async function addCookie(cookieID){
    return new Promise(function (resolve) {
        client.query(`INSERT INTO user values(${cookieID})`,(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}
// insert Notif
async function addNotification(cookieID,variant){
    return new Promise(function (resolve) {
        client.query(`INSERT INTO Notified values(${cookieID},${variant})`,(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}
//get all variants that a single user wants to be notified about 
async function userNotifications(cookieID){
    return new Promise(function (resolve) {
        client.query(`SELECT Var_ID from Notified where Cookie_ID= ${cookieID} `,(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}
//get all values in table
module.exports.table=table
module.exports.priceforproduct=priceforproduct
module.exports.productVariant=productVariant
module.exports.variantPrices=variantPrices
module.exports.addCookie=addCookie
module.exports.addNotification=addNotification
module.exports.userNotifications=userNotifications
