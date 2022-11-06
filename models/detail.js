const mongoose = require('mongoose');

const DetailSchema = mongoose.Schema({
    desc : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required :true ,
    },
    amount :{
        type : String,
        required : true,
    }
});

const Detail = mongoose.model("Detail" , DetailSchema);
module.exports = Detail;