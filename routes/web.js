const homeController =require('../app/http/controller/homeController');
const authController = require('../app/http/controller/authController');
const cartController = require('../app/http/controller/customar/cartcontroller')
const gust =require('../app/http/middleware/gust');
 let = demo = function initRoutes(app){
    app.get("/",homeController().homeRautes);
  //auth login
     app.get('/register',gust,authController().registerRautes)
     app.post('/register', authController().registerPost)
          // auth register
     app.get('/login',gust,authController().loginRoutes)
     app.post('/login',authController().postloginRoutes)

     app.post('/logout',authController().logout)
     
     app.get('/hotal',cartController().cartRoutes)
   
}

module.exports = demo;
