

const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'db.lkznjhybavmqwpszumqk.supabase.co',
  database: 'postgres',
  password: 'SWE363Project.',
  port: 5432,
})
const webPush = require("web-push");
webPush.setVapidDetails(
    "https://example.com/",
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
  
// Change VAPID KEYS to be Environment keys later on :)
process.env['VAPID_PUBLIC_KEY'] = 'BC7i8ymKPvPQIsOQPZHaF6hv6iBzml0kPIw8Tv3lrrxW_d7y04xaqKyrOwJASFiX1ftkfC4HhOb7kjt-kX97COw'
process.env['VAPID_PRIVATE_KEY']= '-iYjeSDs9kPIaVZ4HWs7Iv1c3dM2x0vW0nejLLostU0'

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
        client.query(`SELECT price,currency from product_Pricing where listing_ID in (select listing_ID from product_listing where varid in (select Var_ID from Product_Variant where variant_slug ='${variantName}' AND product_slug="${product}" order by ));`,(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}

async function addEndPoint(cookieID){
    return new Promise(function (resolve) {
        client.query(`INSERT INTO web values(${cookieID})`,(err,res)=>{
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
        client.query(`SELECT Var_ID from Notified where Cookie_ID= $1`,[cookieID+''],(err,res)=>{
            if(err) console.log(err)
            console.log(res)
            resolve(res.rows)
        })

    })
}
//TODO get subscription
async function pushNotification(subscription){
    userNotifications(subscription).then((data)=>{
        for(let i=0;i<data.length;i++){
            client.query('SELECT price,v.variant_slug from product_Pricing a join product_listing l on a.listing_id=l.listing_id join product_variant v on l.varid = v.var_id where a.listing_ID in (select listing_ID from product_listing where varid = $1) order by price ',[data[i].var_id],(err,res)=>{
            row=res.rows[0]
            console.log(row)
            const payload = {
                    title : "DEALS ON "+row.variant_slug,
                    body : "Cheapest Price is "+row.price,
                    tag : "123",
                    clickUrl : "https://"+data[0].var_id
            };
            console.log(payload)
        setTimeout(function () {
            webPush
            .sendNotification(subscription, JSON.stringify(payload), options)
            .then(function () {
            console.log(JSON.stringify(payload))
            res.sendStatus(201);
          })
          .catch(function (error) {
            res.sendStatus(500);
            console.log(error);
          });
      }, 0 * 1000);
            })
        }
    })
}

//get all values in table
module.exports.table=table
module.exports.priceforproduct=priceforproduct
module.exports.productVariant=productVariant
module.exports.variantPrices=variantPrices
module.exports.addEndPoint=addEndPoint
module.exports.addNotification=addNotification
module.exports.userNotifications=userNotifications
module.exports.pushNotification=pushNotification
