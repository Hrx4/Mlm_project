const asyncHandler = require("express-async-handler");
const idList = require("../Models/idList");
const UserModel = require("../Models/userModel");
const data = [
  0.025, 0.0125, 0.005, 0.003, 0.0025, 0.0025, 0.0025, 0.0025, 0.002, 0.0015,
  0.0015, 0.0015, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001,
];

const acceptUser = asyncHandler(async (req, res) => {
  const { userId, introducerCode, userEmail, membershipFee , customer } = req.body;
  let businessName = await UserModel.findOne({ userEmail: userEmail });
  businessName = businessName.userName;

  let parentChild = [];
  try {
    if(customer && introducerCode !== "") {

      const parentUser = await UserModel.findOne({ userId: introducerCode });
      parentUser.customerList.push({
        userId : userId,
        amount : membershipFee * 0.025
      }) 
      parentUser.customerIncome += parseInt(membershipFee * 0.025)

      await parentUser.save()

    } else if (introducerCode !== "") {
      const parentUser = await UserModel.findOne({ userId: introducerCode });
      if (!parentUser)
        return res.status(404).json({ message: "Invalid Introductur Code" });

      if (parentUser.childUsers.length === 0) {
        if (parentUser.levelParent.length === 0) {
          parentChild = [introducerCode];
        } else {
          parentChild = [...parentUser.levelParent, introducerCode];
        }
      } else {
        parentChild = [introducerCode];
      }

      console.log("====================================");
      console.log(parentUser.levelIncome, parseFloat(data[0]), 9384);
      console.log("====================================");

      parentUser.levelIncome += membershipFee * data[0];
      parentUser.business.push({
        businessId: userId,
        businessName: businessName,
        businessMoney: membershipFee * data[0],
        businessLevel: 1,
      });

      const parentSize = parentChild.length;

      for (let i = 1; i < parentSize; i++) {
        let currentParent = await UserModel.findOne({
          userId: parentChild[parentSize - i - 1],
        });
        console.log("====================================");
        console.log("current : ", currentParent);
        console.log("====================================");
        let currentParentChildern = currentParent.childUsers.length;
        let maxiLevel = currentParentChildern * 5;
        if (currentParentChildern >= 4) maxiLevel = 20;
        if (maxiLevel <= i) {
          continue;
        }
        currentParent.levelIncome += membershipFee * data[i];
        currentParent.business.push({
          businessId: userId,
          businessName: businessName,
          businessMoney: membershipFee * data[i],
          businessLevel: i + 1,
        });
        const parentSave = await currentParent.save();
      }

      parentChild.map(async (item, index) => {
        const updateParent = await UserModel.findOne({ userId: item });
        if (updateParent.childUsers.length === 1) {
          updateParent.levelChild.push(userId);
          await updateParent.save();
        }

        console.log("====================================");
        console.log(updateParent);
        console.log("====================================");
      });
      parentUser.childUsers.push(userId);

      const updatedUser = await parentUser.save();
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    throw new Error(error.message);
  }

  let addObj =
    new Date().getDate() >= 15 && new Date().getDate() <= 31
      ? {
          userId: userId,
          userStatus: "Active",
          levelParent: parentChild,
          membershipStatus: "Active",
          $inc: { selfIncomeHalf: membershipFee },
        }
      : {
          userId: userId,
          userStatus: "Active",
          levelParent: parentChild,
          membershipStatus: "Active",
          $inc: { selfIncome: membershipFee },
        };
  const user = await UserModel.findOneAndUpdate(
    { userEmail: userEmail },
    addObj
  );
  const x = await idList.findOneAndUpdate(
    { userEmail: userEmail },
    {
      membershipStatus: "Accepted",
      userId: userId,
    }
  );
  res.status(201).json({ message: "User Accepted" });
});

const getUserList = asyncHandler(async (req, res) => {
  const user = await idList.find();
  res.status(200).json(user);
});

module.exports = { acceptUser, getUserList };
