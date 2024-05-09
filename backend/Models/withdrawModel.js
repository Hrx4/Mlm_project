const mongoose = require("mongoose");

const withdrawModel = mongoose.Schema(
  {
    
    
      userEmail:{
        type:String
      },
      userId:{
        type:String
      },
      bankIfsc: {
        type: String,
        
      },
      bankName: {
        type: String,
        
      },
      bankBranch: {
        type: String,
        
      },
      bankAccountNo: {
        type: String,
        
      },
      bankHolderName: {
        type: String,
        
      },
      bankAccountType: {
        type: String,
        
      },
      bankPan: {
        type: String,
        
      },
      withdrawStatus:{
        type : String,
        default : "pending"
      },
      withdrawAmount : {
        type:Number
      }
    
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("withdrawModel", withdrawModel);
