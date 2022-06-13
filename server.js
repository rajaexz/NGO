require('dotenv').config()
const express= require('express'),
 app = express(),
 path = require('path'),
 ejs = require("ejs"),
 expressLayouts =require('express-ejs-layouts'),
 PORT = process.env.PORT  || 3000,
  mongoose = require('mongoose'),
session =require('express-session'),
 flash = require('express-flash'),
 MongoStore= require('connect-mongo'),
 passport= require('passport');
 


//mongoose 
mongoose.connect(process.env.MCURL, 
{useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology:true,
useFindAndModify:true
}).catch(err => handleError(err))

//midlewere 

//session 
app.use(session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: true,
        cookie: { maxage: 1000 * 60 * 60 * 24},
     store: MongoStore.create({
        mongoUrl: process.env.MCURL,
        ttl:  1000 * 60 * 60 * 24
     })
  }))
  
  //passport config
const passportInit = require('./app/config/passport');
passportInit(passport);
// passprot 
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
 
//Globle middlewere 
app.use((req,res,next)=>{
    res.locals.session = req.session;
    res.locals.user= req.user;
    next();
})
app.use(expressLayouts);
app.set('views' , path.join(__dirname,"./resource/views"))
app.set('view engine', 'ejs');


var connection = mongoose.connection;
connection.once('open',()=>{
    console.log("database is conceted");
}).catch(err=> handleError(err));



require('./routes/web')(app); // function calling system in module

app.listen( PORT ,()=>{
    console.log('server is working ',`${PORT}`);
});



console.log();