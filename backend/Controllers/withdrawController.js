const asyncHandler = require("express-async-handler");
const withdrawModel = require("../Models/withdrawModel");
const userModel = require("../Models/userModel");

const createWithdraw = asyncHandler(async (req, res) => {
  const { amount, userId } = req.body;

  const currentUser = await userModel.findOne({ userId });
  if (parseInt(amount) > currentUser.totalIncome)
    return res.status(402).json({ message: "Withdraw valid amount" });
  if (currentUser.bankAccountNo === "" || currentUser.bankIfsc === "")
    return res.status(403).json({ message: "Bank Details not provided" });

  const {
    userEmail,
    bankIfsc,
    bankName,
    bankBranch,
    bankAccountNo,
    bankHolderName,
    bankAccountType,
    bankPan,
  } = currentUser;

  currentUser.totalIncome = currentUser.totalIncome - amount;
  currentUser.save();

  const withdraw = await withdrawModel.create({
    userEmail,
    userId,
    bankIfsc,
    bankName,
    bankBranch,
    bankAccountNo,
    bankHolderName,
    bankAccountType,
    bankPan,
    withdrawAmount: amount,
  });
  res.status(200).json(withdraw);
});

const withdrawAccept = asyncHandler(async (req, res) => {
  const { withdrawId } = req.body;

  const currentUser = await withdrawModel.findByIdAndUpdate(withdrawId, {
    withdrawStatus: "Accepted",
  });

  res.status(201).json(currentUser);
});

const userWithdraw = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  let user = await withdrawModel.find(userId);
  user = user.filter((item) => item.userId === userId);
  res.status(200).json(user);
});

const allWithdraw = asyncHandler(async (req, res) => {
  let user = await withdrawModel.find();
  res.status(200).json(user);
});

module.exports = {
  createWithdraw,
  withdrawAccept,
  userWithdraw,
  allWithdraw,
};
