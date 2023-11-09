// Used to reinitilize the database in the case of a problem
const express= require('express')
const app= express();
const sqlite3 = require('sqlite3').verbose();
let db= new sqlite3.Database('./test.db')
console.log('Running')