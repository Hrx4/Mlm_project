const mongoose = require("mongoose");

const refundModel = mongoose.Schema(
  {
      
      tradingId: {
        type: String,
        
      },
      tradingAmount: {
        type: Number,
        
      },
      tradingPer: {
        type: Number,

        
      },
      refundAmount: {
        type: Number,
      },
      refundStatus :{
        type :String,
        default : "Pending"
      },
      refundMonth :{
        type : String
      },
      refundPic :{
        type : String,
        default : ""
      }
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("refundModel", refundModel);
