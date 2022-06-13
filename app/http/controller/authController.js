 var User = require('../../models/auth');
 const bcrypt = require('bcrypt');
const passport = require('passport');
function factoryAuth (){
     return {

        registerRautes(req,res){  //routes is key store empty function  
            res.render('auth/register');
                } ,
            async  registerPost(req,res){

                 var  { name , email , password} = req.body;
                     
                //validate request 
                if(!name || !email || !password){
                    req.flash('wrong', "All fild is required");
                    req.flash('name',name);
                    req.flash('email',email);
                    return res.redirect('/register');
                }

               //chcek if email exists 
                User.exists({email: email}, (err,result)=>{
                    if(result){
                     req.flash("wrong", "Email is Allready taken ");
                     req.flash('name', name);
                     req.flash('email', email);
                     return res.redirect('/register');
                    }
                }) // exists is data base function it is check that email is exists or not 
               

               // hash password 
               const hashPassword = await bcrypt.hash(password,10)
              //create user in database 
              const user = new User({
                name ,
                email,
                  password: hashPassword
              });
              user.save().then(user=>{
                return res.redirect('/');
              }).catch((err)=>{
        
                req.flash("wrong", "Something is wrong ");
                console.log(err);
                return res.redirect('/register');
         
              });


            },
          




                   
         loginRoutes(req,res){
            res.render('auth/login')

      },

      postloginRoutes(req,res, next){
             passport.authenticate('local', (err, user , info)=>{
               if(err){
                 req.flash('wrong',info.message)
                 return next(err);
               }


               if(!user){
                   req.flash('wrong',info.message)
                return res.redirect('/login');
               }


               req.logIn(user,(err)=>{
                 if(err){ 
                 req.flash('wrong', info.message);
                 return next(err)
              }


                return res.redirect('/');


            })

             })(req, res, next)
      },

      logout(req,res){ 
        req.logout();
        return res.redirect('/login');
      }

     }
}

module.exports = factoryAuth;
