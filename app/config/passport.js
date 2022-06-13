const Localstrategy = require('passport-local');
const User = require('.././models/auth');
const bcrytp = require('bcrypt');


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (!user.verifyPassword(password)) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

function init(passport){
    passport.use(new Localstrategy({usernameField:"email"},async (email, password, done)=>{
        // login
        //check email exists
           const user = await User.findOne({email: email});
         
            if (!user) { return done(null, false ,{message: "No User in database  "}) }

           bcrytp.compare(password, user.password).then(macth=>{ 
               if(macth){
                return done(null, user,{message: "Logged in succesfully "})
               }
               return done(null, false,{message: "Wrong username or password "})
           }).catch(err=>{
            return done(null, false,{message: "Same thing is wrong"});

           })
    }))
    
    passport.serializeUser((user,done)=>{ //session mai kya store karna h 

        done(null, user._id)
    })


    passport.deserializeUser((id, done)=>{// jobhi data store hua h in session mai
        User.findById(id,(err,user)=>{

            done(err,user)
        })
    })
}

module.exports = init;