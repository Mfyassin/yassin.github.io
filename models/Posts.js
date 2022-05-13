const mongoose = require ('mongoose');

const PostSchema = mongoose.model( 'coll1' ,{ // connectiong to the collection in the Mongo

    title:{
        type: String,
        required : true
    }
    ,

    description:{
        type : String , 
        required : true
    }
})




module.exports = PostSchema;