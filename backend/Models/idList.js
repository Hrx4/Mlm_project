const mongoose = require("mongoose");

const idList = mongoose.Schema(
  {
    userName:{
        type : String
    } ,
    userId : {
        type : String
    },
    introducerCode : {
      type : String
    },
    userEmail : {
      type : String,
      unique : true,
      
    },
    membershipFee : {
      type : Number,
      default : 0
    },
    membershipPhoto : {
      type : String
    },
    membershipStatus :{
      type :String,
      default : "pending"
    }

    
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("idList", idList);
