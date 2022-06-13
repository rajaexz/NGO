const Template = require('../../models/tamplate');

function factoryHome(){
    return {
      
        homeRautes(req,res){  //routes is a
      
            Template.find().then((data)=>{
                 
                res.render("home",{datakey: data});
              
            })
                } ,

    }
       
}

module.exports = factoryHome;