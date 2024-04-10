const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/userModel");
const idList = require("../Models/idList");

const acceptUser = asyncHandler(async (req, res) => {
  const { userId , introducerCode , userEmail } = req.body;
  if(userId===""|| userId===null || userId===undefined) throw new Error("Give User Id")
  let parentChild = [];
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

    parentChild.map(async (item, index) => {
      const updateParent = await UserModel.findOneAndUpdate(
        { userId: item },
        { $push: { levelChild: userId } }
      );
    });
    parentUser.childUsers.push(userId);

    const updatedUser = await parentUser.save();
  }

  console.log("====================================");
  console.log({ intr: introducerCode , userId });
  console.log("====================================");

  const user = await UserModel.findOneAndUpdate(
    { userEmail : userEmail },
    { userId: userId, userStatus: "Active", levelParent: parentChild}
  );
  const x = await idList.deleteOne({ userEmail : userEmail });
  res.status(201).json({ message: "User Accepted" });
});

const getUserList = asyncHandler(async (req, res) => {
  const user = await idList.find();
  res.status(200).json(user);
});

module.exports = { acceptUser, getUserList };
