const mongoose = require("mongoose");

const idList = mongoose.Schema(
  {
    userName:{
        type : String
    } ,
    userId : {
        type : String
    },
    userCodeId : {
        type : String
    }
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("idList", idList);
