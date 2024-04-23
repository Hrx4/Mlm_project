const asyncHandler = require("express-async-handler");
const idList = require("../Models/idList");

const membershipFeeUpload = asyncHandler(async(req , res)=>{
   const {membershipFee , membershipPhoto , membershipId} = req.body;
   let updateMembership 
   try {
     updateMembership = await idList.findOneAndUpdate({userEmail : membershipId} , 
        {
            membershipFee : parseInt(membershipFee),
            membershipPhoto : membershipPhoto
        })
   } catch (error) {
    throw new Error(error.message)
   }
   console.log('====================================');
   console.log("update :" + updateMembership)
   console.log('====================================');
res.status(201).json(updateMembership)
})

module.exports = { membershipFeeUpload };
