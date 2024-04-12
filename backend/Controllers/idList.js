const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/userModel");
const idList = require("../Models/idList");
const data = [
  0.025, 0.0125, 0.005, 0.003, 0.0025, 0.0025, 0.0025, 0.0025, 0.002, 0.0015,
  0.0015, 0.0015, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001,
];

const acceptUser = asyncHandler(async (req, res) => {
  const { userId, introducerCode, userEmail, membershipFee } = req.body;
  if (userId === "" || userId === null || userId === undefined)
    throw new Error("Give User Id");
  let parentChild = [];
 try {

  if (introducerCode !== "") {
    const parentUser = await UserModel.findOne({ userId: introducerCode });
    if (!parentUser)
      return res.status(404).json({ message: "Invalid Introductur Code" });

    if (parentUser.childUsers.length === 0) {
      if (parentUser.levelParent.length === 0) {
        parentChild = [introducerCode];
      } else {
        parentChild = [...parentUser.levelParent, introducerCode];
      }
    }
    else{
      parentChild = [introducerCode];
    }

    console.log('====================================');
    console.log(parentUser.levelIncome, parseFloat( data[0]) , 9384);
    console.log('====================================');

    parentUser.levelIncome += membershipFee * data[0];

    const parentSize = parentChild.length;

    for (let i = 1; i < parentSize; i++) {
      let currentParent = await UserModel.findOne({
        userId: parentChild[parentSize - i - 1],
      });
      console.log('====================================');
      console.log("current : " , currentParent);
      console.log('====================================');
      let currentParentChildern = currentParent.childUsers.length;
      let maxiLevel = currentParentChildern * 5;
      if (currentParentChildern >= 5) maxiLevel = 25;
      if (maxiLevel <= i) {
        console.log('====================================');
        console.log(maxiLevel , i);
        console.log('====================================');
        continue;}
      currentParent.levelIncome += membershipFee * data[i];
      const parentSave = await currentParent.save();
      console.log('====================================');
      console.log("parentsave : " , parentSave);
      console.log('====================================');
    }

    parentChild.map(async (item, index) => {
      const updateParent = await UserModel.findOne(
        { userId: item },
      );
      if(updateParent.childUsers.length===1) {
        updateParent.levelChild.push(userId)
        await updateParent.save()
      }

      console.log('====================================');
    console.log(updateParent);
    console.log('====================================');
    });
    parentUser.childUsers.push(userId);

    const updatedUser = await parentUser.save();
  }
  
 } catch (error) {
  console.log('====================================');
  console.log(error);
  console.log('====================================');
  throw new Error(error)

 }

  console.log("====================================");
  console.log({ intr: introducerCode, userId });
  console.log("====================================");

  const user = await UserModel.findOneAndUpdate(
    { userEmail: userEmail },
    { userId: userId, userStatus: "Active", levelParent: parentChild , selfIncome : membershipFee }
  );
  const x = await idList.deleteOne({ userEmail: userEmail });
  res.status(201).json({ message: "User Accepted" });
});

const getUserList = asyncHandler(async (req, res) => {
  const user = await idList.find();
  res.status(200).json(user);
});

module.exports = { acceptUser, getUserList };
