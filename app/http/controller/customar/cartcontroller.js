

function factoryCart(){
    return {
      
                cartRoutes(req,res){  //routes is key store empty function  
                    res.render("hotal/cart");
                        },

                    }
    }


module.exports = factoryCart;