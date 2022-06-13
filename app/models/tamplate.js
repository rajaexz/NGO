const mongoose = require('mongoose');
 

        const Schema =   mongoose.Schema;


    const templateSchema =   new Schema(
            {
                name: {type: String, required: true},
                image: {type: String, required: true},
                price: {type: Number, required: true},
                
            }
        )


        

        module.exports =   mongoose.model('Template',templateSchema); // modules is all ways singular keyName just like here ..i put name a Tempalte , 