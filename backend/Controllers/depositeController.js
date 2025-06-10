const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/userModel");
const depositeModel = require("../Models/depositeModel");
const data = [0.015, 0.01, 0.005, 0.003, 0.002, 0.002, 0.001, 0.001, 0.001];

const createDeposite = asyncHandler(async (req, res) => {
  const {
    depositeAmount,
    depositePhoto,
    depositeMode,
    userEmail,
    introducerCode,
    userId,
    customer,
  } = req.body;

  const currentUser = await UserModel.findOne({ userEmail: userEmail });
  if (currentUser.userStatus !== "Active")
    return res.status(400).json({ message: "Take membership first" });

  const deposite = await depositeModel.create({
    depositeAmount,
    depositePhoto,
    depositeMode,
    userEmail,
    userId,
    depositeDate: new Date().toLocaleDateString(),
    introducerCode,
    customer,
  });
  //   let user = await UserModel.findOne({ userId: userId });
  //     (new Date().getDate() >= 15 && new Date().getDate() <= 31)
  //       ? (user.selfIncomeHalf += depositeAmount)
  //       : (user.selfIncome += depositeAmount);
  // await user.save()

  res.status(200).json({ message: "User Accepted" });
});

const acceptDeposite = asyncHandler(async (req, res) => {
  const {
    depositeAmount,
    userEmail,
    introducerCode,
    userId,
    acceptId,
    customer,
  } = req.body;
  const currentUser = await UserModel.findOne({ userEmail: userEmail });
  if (currentUser.userStatus !== "Active")
    throw new Error("Take membership first");
  let parentChild = currentUser.levelParent;
  const businessName = currentUser.userName;

  new Date().getDate() >= 15 && new Date().getDate() <= 31
    ? (currentUser.selfIncomeHalf += depositeAmount)
    : (currentUser.selfIncome += depositeAmount);
  await currentUser.save();

  try {
    if (customer && introducerCode !== "") {
      const parentUser = await UserModel.findOne({ userId: introducerCode });
      parentUser.customerIncome += parseInt(depositeAmount * 0.015);
      const ind = parentUser.customerList.findIndex(
        (item) => item.userId === userId
      );
      parentUser.customerList[ind] = {
        userId: parentUser.customerList[ind].userId,
        amount: parentUser.customerList[ind].amount + depositeAmount * 0.015,
      };

      await parentUser.save();
    } else if (introducerCode !== "") {
      const parentUser = await UserModel.findOne({ userId: introducerCode });
      if (!parentUser)
        return res.status(404).json({ message: "Invalid Introductur Code" });

      parentUser.levelIncome += depositeAmount * data[0];
      let currentIndex = 0;
      if (
        parentUser.business.find((item, ind) => {
          currentIndex = ind;
          return item.businessId === userId;
        })
      ) {
        parentUser.business[currentIndex] = {
          businessId: userId,
          businessName: businessName,
          businessMoney:
            parentUser.business[currentIndex].businessMoney +
            depositeAmount * data[0],
          businessLevel: 1,
        };
      }

      parentChild = parentChild.slice(-9);
      parentChild.reverse()

      const parentSize = parentChild.length;

      for (let i = 0; i < parentSize; i++) {
        let currentParent = await UserModel.findOne({
          userId: parentChild[i],
        });
        currentParent.levelIncome += depositeAmount * data[i];
        let curInd = 0;
        if (
          currentParent.business.find((item, ind) => {
            curInd = ind;
            return item.businessId === userId;
          })
        ) {
          currentParent.business[curInd] = {
            businessId: userId,
            businessName: businessName,
            businessMoney:
              currentParent.business[curInd].businessMoney +
              depositeAmount * data[i],
            businessLevel: i + 1,
          };
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

  const deposite = await depositeModel.findByIdAndUpdate(acceptId, {
    depositeStatus: "Accept",
  });

  res.status(201).json(deposite);
});

const getDeposite = asyncHandler(async (req, res) => {
  let user = await depositeModel.find();
  console.log(user);
  res.status(200).json(user);
});

const getUserDeposite = asyncHandler(async (req, res) => {
  const userEmail = req.params.id;
  console.log(userEmail);
  let user = await depositeModel.find();
  user = user.filter((item, index) => {
    return item.userEmail === userEmail;
  });
  res.status(200).json(user);
});

module.exports = {
  createDeposite,
  getDeposite,
  getUserDeposite,
  acceptDeposite,
};
