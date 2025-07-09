const mongoose = require("mongoose");

const depositeModel = mongoose.Schema(
  {
    
    depositeAmount : {
      type : Number,
      default : 0
    },
    depositePhoto : {
      type : String
    },
    depositeMode : {
        type : String
      },
      depositeId : {
        type : String
      },
      depositeStatus:{
        type: String,
        default : "None"
      },
      depositeDate : {
        type : String
      },
      userEmail:{
        type:String
      },
      userId:{
        type:String
      },
      introducerCode:{
        type:String
      },
      customer : {
        type : Boolean
      }

    
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("depositeModel", depositeModel);
