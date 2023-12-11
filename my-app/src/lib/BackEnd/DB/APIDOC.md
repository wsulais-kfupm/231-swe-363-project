##DATABASE API DOCUMENT
this is a documentation of the api used to query the database, We will use the following structure:

The return of your request is always a json object

When a url structure starts with : that is a variable, EX:
/get/all/:products
here products is the variable and should be replaced with the desired product name

Different methods:

### Get all elements in a certian Table in the data Base: /get/all/:table

### Get all variants of a certain product: /get/variants/:product

### get all prices of a single product /get/marketprices/:productName

### get all prices of a single variant: /get/marketprices/:productName/:variantName
