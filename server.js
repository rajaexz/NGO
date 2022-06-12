require('dotenv').config()
const bcryt = require('bcrypt');
const express = require('express');
const { linkSync } = require('fs');
const expressLayouts = require('express-ejs-layouts')
 const app = express();
const path = require('path');
const mongoose = require('mongoose');
//set middlewere
app.use(express.static("public"))
 app.use(expressLayouts);
 app.set('views' , path.join(__dirname,"./res/views"))
 app.set('view engine', 'ejs');
 app.use(express.json());
 app.use(express.urlencoded({extended:true}))
  
 // monooge
  
 app.get('/',(req,res)=>{
  res.render('home');
 })
 app.get('/register',(req,res)=>{
    res.render('user/user');
   })
   app.post('/',async(req , res)=>{
    const {password , username }= req.body;

    res.send(password);
    console .log(password)
   })
 
 app.listen('3000',()=>{
     console.log('server is working')
 });