CREATE Table Brand(
	Bname_slug TEXT PRIMARY Key
);

CREATE Table Product(
	Pname_slug TEXT PRIMARY Key,
	Bname not NULL,
	FOREIGN KEY(Bname) REFERENCES Brand(Bname_slug)	
);
CREATE Table Product_Variant(
	Var_ID INTEGER PRIMARY KEY,
	product_slug TEXT NOT NULL,
	variant_slug TEXT NOT NULL,
	quantity FLOAT,
	quantity_unit TEXT,
	quantity_pcs  INTEGER DEFAULT 1,
	FOREIGN KEY (product_slug) REFERENCES Product(Pname_slug),
	UNIQUE (variant_slug, quantity_unit, quantity_pcs)
);
CREATE Table Market(
	marketName_slug TEXT primary key,
	Region TEXT not null,
	Website TEXT not null
);
CREATE Table product_listing(
	listing_ID INTEGER PRIMARY KEY,
	varid INTEGER not null,
	url text,
	marketName text not null,
	FOREIGN KEY(varid) REFERENCES Product_Variant(Var_ID),
	FOREIGN KEY(marketName) REFERENCES Market(marketName_slug)
);
CREATE TABLE Categories(
	Category text PRIMARY KEY
);
CREATE TABLE User(
 Cookie_ID text PRIMARY key
);
CREATE TABLE product_Pricing(
  pricing_Date date,
  listing_ID INTEGER,
  currency text not null,
  price INTEGER not null,
  PRIMARY KEY(pricing_Date,listing_ID),
  FOREIGN key(listing_ID ) REFERENCES product_listing(listing_ID)
);
CREATE table Market_Category(
	Category text,
	marketName_slug TEXT,
	PRIMARY key(Category,marketName_slug),
	FOREIGN key(marketName_slug) REFERENCES Market(marketName_slug),
	FOREIGN key(Category) REFERENCES Categories(Category)
);
CREATE table Notified(
	Cookie_ID text,
	Var_ID INTEGER,
	FOREIGN key(Var_ID) REFERENCES Product_Variant(Var_ID),
	FOREIGN key(Cookie_ID) REFERENCES User(Cookie_ID)
);

insert into brand VALUES('Lipton');

insert into Product VALUES('ICE_TEA','Lipton');

insert into Product_Variant VALUES(1,'ICE_TEA','Mint',100,'ML',1);

insert into Market values('Othaim','Saudi','https://www.othaimmarkets.com/splash');

INSERT into product_listing VALUES(1,1,'https://www.othaimmarkets.com/home-featured-products/haleyhoney1k.html','Othaim');

INSERT into Categories VALUES('grociries');

INSERT into User values('123x');

INSERT into product_Pricing values('2021/10/31',1,'SAR',12);
 
INSERT into Market_Category values('grociries','Othaim');

INSERT into Notified VALUES('123x',1)

CREATE VIEW priceforproduct as SELECT p.price,p.currency,v.product_slug,v.variant_slug from product_Pricing p join Product_Variant v join product_listing l on p.listing_ID=l.listing_ID and l.varid=v.Var_ID 