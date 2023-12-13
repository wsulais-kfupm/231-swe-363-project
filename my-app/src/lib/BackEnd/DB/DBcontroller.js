// @ts-nocheck

import { Client } from 'pg';

const client = new Client({
	user: 'postgres',
	host: 'db.lkznjhybavmqwpszumqk.supabase.co',
	database: 'postgres',
	password: 'SWE363Project.',
	port: 5432
});
process.env['VAPID_PUBLIC_KEY'] =
	'BC7i8ymKPvPQIsOQPZHaF6hv6iBzml0kPIw8Tv3lrrxW_d7y04xaqKyrOwJASFiX1ftkfC4HhOb7kjt-kX97COw';
process.env['VAPID_PRIVATE_KEY'] = '-iYjeSDs9kPIaVZ4HWs7Iv1c3dM2x0vW0nejLLostU0';
import webPush from 'web-push';
webPush.setVapidDetails(
	'https://example.com/',
	process.env.VAPID_PUBLIC_KEY,
	process.env.VAPID_PRIVATE_KEY
);

// Change VAPID KEYS to be Environment keys later on :)

client.connect(function (/** @type {any} */ err) {
	if (err) throw err;
	console.log('Connected!');
});
// get all elements in a table

/**
 * @param {any} table
 */
async function table(table) {
	return new Promise(function (resolve) {
		client.query(
			`SELECT * FROM ${table}`,
			(/** @type {any} */ err, /** @type {{ rows: any; }} */ res) => {
				if (err) console.log(err);
				console.log(res);
				resolve(res.rows);
			}
		);
	});
}
// get all prices of a single product

/**
 * @param {any} productname
 */
async function priceforproduct(productname) {
	return new Promise(function (resolve) {
		client.query(
			`SELECT Price,currency,variant_slug from priceforproduct where product_slug=${productname}`,
			(/** @type {any} */ err, /** @type {{ rows: any; }} */ res) => {
				if (err) console.log(err);
				console.log(res);
				resolve(res.rows);
			}
		);
	});
}
// get all variants of a product

/**
 * @param {any} product
 */
async function productVariant(product) {
	return new Promise(function (resolve) {
		client.query(`select variant_slug,varid, b.listing_id,c.currency,price,url,quantity,quantity_unit,
		quantity_pcs,marketname from product_variant a join product_listing b on  
		a.var_id=b.varid join (select listing_id,currency as currency ,price as price from product_pricing) c on c.listing_id=b.listing_id where a.product_slug=$1`,[product]
			,(/** @type {any} */ err, /** @type {{ rows: any; }} */ res) => {
				if (err) console.log(err);
				console.log(res);
				resolve(res.rows);
			}
		);
	});
}
// get all prices of a single variant
/**
 * @param {any} product
 * @param {any} variantName
 */
async function variantPrices(product, variantName) {
	return new Promise(function (resolve) {
		client.query(
			`SELECT price,currency from product_Pricing where listing_ID in (select listing_ID from product_listing where varid in (select Var_ID from Product_Variant where variant_slug ='${variantName}' AND product_slug="${product}" order by ));`,
			(/** @type {any} */ err, /** @type {{ rows: any; }} */ res) => {
				if (err) console.log(err);
				console.log(res);
				resolve(res.rows);
			}
		);
	});
}

/**
 * @param {{ key: { [s: string]: any; } | ArrayLike<any>; sub: { endpoint: any; keys: { auth: any; p256dh: any; }; }; }} subscription
 */
async function addEndPoint(subscription) {
	return new Promise(function (resolve) {
		let j = Object.values(subscription.key);

		client.query(
			`INSERT INTO webuser values($1,$2,$3,$4)`,
			[subscription.sub.endpoint, subscription.sub.keys.auth, subscription.sub.keys.p256dh, j],
			(/** @type {any} */ err, /** @type {any} */ res) => {
				if (err) console.log(err);
				resolve(1);
			}
		);
	});
}
// insert Notif
/**
 * @param {any} cookieID
 * @param {any} variant
 */
async function addNotification(cookieID, variant) {
	return new Promise(function (resolve) {
		client.query(
			`INSERT INTO Notified values(${cookieID},${variant})`,
			(/** @type {any} */ err, /** @type {{ rows: any; }} */ res) => {
				if (err) console.log(err);
				console.log(res);
				resolve(res.rows);
			}
		);
	});
}
//get all variants that a single user wants to be notified about

/**
 * @param {string} cookieID
 */
async function userNotifications(cookieID) {
	return new Promise(function (resolve) {
		client.query(
			`SELECT Var_ID from Notified where Cookie_ID= $1`,
			[cookieID + ''],
			(/** @type {any} */ err, /** @type {{ rows: any; }} */ res) => {
				if (err) console.log(err);
				resolve(res.rows);
			}
		);
	});
}
//TODO get subscription
async function psuhAllNotifications() {
	client.query(
		`SELECT * from webuser `,
		(/** @type {any} */ err, /** @type {{ rows: any; }} */ res) => {
			if (err) console.log(err);
			let row = res.rows;
			for (let i = 0; i < row.length; i++) {
				let encode = row[i].encodedVap.map((/** @type {string} */ j) => parseInt(j));
				console.log(encode);
				let subscription = {
					endpoint: row[i].cookie_id,
					expirationTime: null,
					keys: {
						p256dh: row[i].p256dh,
						auth: row[i].auth
					},
					options: {
						userVisibileOnly: true,
						applicationServerKey: encode
					}
				};
				console.log(subscription);
				pushNotification(subscription).then(() => console.log('pushed'));
			}
		}
	);
}
///notifs:
// insert done
// collect
/**
 * @param {{ endpoint: any; }} subscription
 */
async function pushNotification(subscription) {
	userNotifications(subscription.endpoint).then((data) => {
		for (let i = 0; i < data.length; i++) {
			client.query(
				'SELECT price,v.variant_slug from product_Pricing a join product_listing l on a.listing_id=l.listing_id join product_variant v on l.varid = v.var_id where a.listing_ID in (select listing_ID from product_listing where varid = $1) order by price ',
				[data[i].var_id],
				(/** @type {any} */ err, /** @type {{ rows: any[]; }} */ res) => {
					if (err) console.log('there is an error here');
					let row = res.rows[0];
					console.log(row + 'uhaiufoiuasbfuhabrvfiasiufwewefhfsbfokjfewai');
					const payload = {
						title: 'DEALS ON ' + row.variant_slug,
						body: 'Cheapest Price is ' + row.price,
						tag: '123',
						clickUrl: 'https://' + data[0].var_id
					};
					console.log(payload);
					const options = {
						TTL: 5
					};
					setTimeout(function () {
						webPush
							// @ts-ignore
							.sendNotification(subscription, JSON.stringify(payload), options)
							.then(function () {
								console.log(JSON.stringify(payload));
							})
							.catch(function (/** @type {any} */ error) {
								console.log(error);
							});
					}, 1 * 1000);
				}
			);
		}
		return 1;
	});
}
/**
 * @param {string | any[]} base64String
 */
function urlBase64ToUint8Array(base64String) {
	var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
	var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

	var rawData = atob(base64);
	var outputArray = new Uint8Array(rawData.length);

	for (var i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}

    function mainPage(){
    return new Promise( function (resolve) {
        client.query(`SELECT * from product`,async (/** @type {any} */ err,/** @type {{ rows: any; }} */ res)=>{
            if(err) console.log(err)
            let rows=res.rows

				for(let i=0;i<rows.length;i++){
					 rows[i].variants=await new Promise( function (ret) {
                
						client.query(`select variant_slug,varid, b.listing_id,c.currency,price,url,quantity,quantity_unit,quantity_pcs,marketname from 
						product_variant a join product_listing b on  a.var_id=b.varid join (select listing_id,max(currency) as currency ,min(price) as price from product_pricing group by listing_id ) c on c.listing_id=b.listing_id where a.product_slug=$1`,[rows[i].pname_slug],(err,variant)=>{
							ret(variant.rows)	
						})

				})
				}
                resolve(rows)
        })

    })}
    function search(pname_slug){
		return new Promise( function (resolve) {
			client.query(`SELECT * from product where pname_slug=$1`,[pname_slug],async (/** @type {any} */ err,/** @type {{ rows: any; }} */ res)=>{
				if(err) console.log(err)
				let rows=res.rows
					resolve(rows)
			   
			})
	
		})}
	
    function frontpage(limit){
        return new Promise( function (resolve) {
            client.query(`SELECT * from product limit $1`,[limit],async (/** @type {any} */ err,/** @type {{ rows: any; }} */ res)=>{
                if(err) console.log(err)
                let rows=res.rows
                
                    resolve(rows) 
               
            })
    
        })}
        function wrap(i) {   
            return new Promise((resolve) => setTimeout(resolve, i));
        }
        function listing(pname_slug){
            return new Promise( function (resolve) {
                
                    client.query(`select variant_slug,varid, b.listing_id,c.currency,price,url,quantity,quantity_unit,quantity_pcs,marketname from 
                    product_variant a join product_listing b on  a.var_id=b.varid join (select listing_id,max(currency) as currency ,min(price) as price from product_pricing group by listing_id ) c on c.listing_id=b.listing_id where a.product_slug=$1`,[pname_slug],(err,variant)=>{
                        
                        resolve(variant.rows)
                        
                    })
    
    
                    
                   
    
            })}
//   client.query(`select * from product`,(err,res)=>{
//     console.log(res.rows)
// })
// client.query(`select varid,product_slug, b.listing_id,c.currency,price,url,quantity,quantity_unit,quantity_pcs from product_variant a join product_listing b on  a.var_id=b.varid join (select listing_id,max(currency) as currency ,min(price) as price from product_pricing group by listing_id ) c on c.listing_id=b.listing_id`,(/** @type {any} */ err,/** @type {{ rows: any; }} */ res)=>{
//     console.log(res.rows)
// })
// client.query(`select * from products`,(/** @type {any} */ err,/** @type {{ rows: any; }} */ res)=>{
//     console.log(res.rows)
// })
//get all values in table
// module.exports.table=table
// module.exports.priceforproduct=priceforproduct
// module.exports.productVariant=productVariant
// module.exports.variantPrices=variantPrices
// module.exports.addEndPoint=addEndPoint
// module.exports.addNotification=addNotification
// module.exports.userNotifications=userNotifications
// module.exports.pushNotification=pushNotification
// module.exports.psuhAllNotifications=psuhAllNotifications
export {
	table,
	priceforproduct,
	productVariant,
	variantPrices,
	addEndPoint,
	addNotification,
	userNotifications,
	psuhAllNotifications,
	mainPage,
	frontpage,
	listing,
	search
};
