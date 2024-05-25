const mongoose = require("mongoose");

const tradingModal = mongoose.Schema(
  {
      userId:{
        type:String
      },
      tradingId: {
        type: String,
        
      },
      tradingPhoto: {
        type: String,
        
      },
      tradingAmount: {
        type: String,
        
      },
      tradingStatus: {
        type: String,
        default : 'Pending'
      }
    
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("tradingModal", tradingModal);
