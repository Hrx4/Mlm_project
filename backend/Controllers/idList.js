const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/userModel").default;
const idList = require("../Models/idList");

const acceptUser = asyncHandler(async (req, res) => {
  const { userId, userCodeId } = req.body;
  const user = await UserModel.findOneAndUpdate(
    { userId: userId },
    { userCodeId: userCodeId, userStatus: "Active" }
  );
  console.log("====================================");
  console.log(user);
  console.log("====================================");
  const x = await idList.deleteOne({ userId: userId });
  console.log("====================================");
  console.log(x);
  console.log("====================================");
  res.status(201).json({ message: "User Accepted" });
});

const getUserList = asyncHandler(async (req, res) => {
  const user = await idList.find();
  res.status(200).json(user);
});

module.exports = { acceptUser, getUserList };
