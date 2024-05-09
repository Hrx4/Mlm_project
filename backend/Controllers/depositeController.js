const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/userModel");
const depositeModel = require("../Models/depositeModel");
const data = [
  0.025, 0.0125, 0.005, 0.003, 0.0025, 0.0025, 0.0025, 0.0025, 0.002, 0.0015,
  0.0015, 0.0015, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001,
];

const createDeposite = asyncHandler(async (req, res) => {
  const {
    depositeAmount,
    depositePhoto,
    depositeMode,
    userEmail,
    introducerCode,
    userId,
  } = req.body;

  const deposite = await depositeModel.create({
    depositeAmount,
    depositePhoto,
    depositeMode,
    userEmail,
    userId,
    depositeDate : new Date().toLocaleDateString(),
    introducerCode
  })

  res.status(200).json({ message: "User Accepted" });
});

const acceptDeposite = asyncHandler(async (req, res) => {
  const {
    depositeAmount,
    userEmail,
    introducerCode,
    userId,
    acceptId
  } = req.body;
  const currentUser = await UserModel.findOne({ userEmail: userEmail });
  if (currentUser.selfIncome === 0) throw new Error("Take membership first");
  let parentChild = currentUser.levelParent;
  const businessName = currentUser.userName;

  currentUser.selfIncome += depositeAmount 
  await currentUser.save();
  
  try {
    if (introducerCode !== "") {
      const parentUser = await UserModel.findOne({ userId: introducerCode });
      if (!parentUser)
        return res.status(404).json({ message: "Invalid Introductur Code" });

      parentUser.levelIncome += depositeAmount * data[0];
      let currentIndex =0;
      if(parentUser.business.find((item , ind) => {
        currentIndex=ind;
        return item.businessId===userId})){
          parentUser.business[currentIndex] = {
            businessId: userId,
            businessName: businessName,
            businessMoney: parentUser.business[currentIndex].businessMoney + (depositeAmount * data[0]),
            businessLevel: 1,
          }
        }
      

      const parentSize = parentChild.length;

      for (let i = 1; i < parentSize; i++) {
        let currentParent = await UserModel.findOne({
          userId: parentChild[parentSize - i - 1],
        });
        let currentParentChildern = currentParent.childUsers.length;
        let maxiLevel = currentParentChildern * 5;
        if (currentParentChildern >= 4) maxiLevel = 20;
        if (maxiLevel <= i) {
          continue;
        }
        currentParent.levelIncome += depositeAmount * data[i];
        let curInd =0;
        if(currentParent.business.find((item , ind) => {
          curInd=ind;
          return item.businessId===userId})){
            currentParent.business[curInd] = {
              businessId: userId,
              businessName: businessName,
              businessMoney: currentParent.business[curInd].businessMoney + (depositeAmount * data[0]),
              businessLevel: i+1,
            }
          }

       
        const parentSave = await currentParent.save();
        
      }

      // parentChild.map(async (item, index) => {
      //   const updateParent = await UserModel.findOne({ userId: item });
      //   if (updateParent.childUsers.length === 1) {
      //     updateParent.levelChild.push(userId);
      //     await updateParent.save();
      //   }

      //   console.log("====================================");
      //   console.log(updateParent);
      //   console.log("====================================");
      // });
      // parentUser.childUsers.push(userId);

      const updatedUser = await parentUser.save();
    }

  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    throw new Error(error.message);
  }

  const deposite = await depositeModel.findByIdAndUpdate(acceptId , {
    depositeStatus : "Accept"
  })

  res.status(201).json(deposite);
});

const getDeposite = asyncHandler(async (req, res) => {
  let user = await depositeModel.find();
  console.log(user);
  res.status(200).json(user);
});

const getUserDeposite = asyncHandler(async (req, res) => {
  const userEmail = req.params.id
  console.log(userEmail);
  let user = await depositeModel.find();
  user = user.filter((item , index)=>{
    return item.userEmail===userEmail
  })
  res.status(200).json(user);
});

module.exports = { createDeposite, getDeposite , getUserDeposite,acceptDeposite };
