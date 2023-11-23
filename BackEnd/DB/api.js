// what we want is to do the following
// request all products DONE
// request all variants of a certian product DONE
// requst all product listings in a market DONE
// requesst all historical prices of a variant of a product Done
// goal is to finish then refactor in type script when I'm comfortable
// insert cookieID and retreive it

//port used will be 3000
const express= require('express')
const app= express();
const sqlite3 = require('sqlite3').verbose();
let db= new sqlite3.Database('./db.db')
// get all elements in a table
app.get("/get/all/:table",(req,res)=>{
    db.all(`select * from ${req.params['table']}`,(err,rows)=>{     
        if (err) console.log(err)
        res.json(rows)
    })
})
// get all variants of a product
app.get("/get/variants/:product",(req,res)=>{
    db.all(`SELECT * from Product_Variant where product_slug = "${req.params.product}"`,(err,rows)=>{
        if (err) res.status(404).send("No such product exists");
        console.log(rows)
        res.json(rows)
    })
})

// get all prices of a single variant
app.get("/get/marketprices/:productName/:variantName",(req,res)=>{
    
    db.all(`SELECT price,currency from product_Pricing where listing_ID in (select listing_ID from product_listing where varid in (select Var_ID from Product_Variant where variant_slug ='${req.params.variantName}' AND product_slug="${req.params.productName}" ));`,(err,rows)=>{
        if (err) res.status(404).send("No such Variant exists");
        console.log(rows)
        res.json(rows)
    })
})
// get all prices of a single product
// TODO redo
app.get("/get/marketprices/:productName",(req,res)=>{
    
    db.all(`SELECT Price,currency,variant_slug from priceforproduct where product_slug=${req.params.productName}`,(err,rows)=>{
        if (err) console.log(err);
        console.log(rows)
        res.json(rows)
    })
})

app.get("/add/cookie/:id",(req,res)=>{
    db.run(`INSERT INTO user values(${req.params.id})`,(runres,err)=>{
        if(err) res.status(404);
        res.status(200);
    })
})

app.get('/add/notification/:cookieID/:varID',(req,res)=>{
    db.run(`INSERT INTO Notified values(${req.params.cookieID},${req.params.varID})`,(runres,err)=>{
        if(err) res.status(404);
        res.status(200);
    })

})
app.get("/get/notification/:cookieID",(req,res)=>{
    db.run(`SELECT Var_ID from Notified where Cookie_ID= ${req.params.cookieID} `,(err,rows)=>{
        if (err) res.status(404);
        res.json(rows)
    })
})
app.listen(3000)