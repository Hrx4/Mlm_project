const asyncHandler = require("express-async-handler");
const withdrawModel = require("../Models/withdrawModel");
const userModel = require("../Models/userModel");

const createWithdraw = asyncHandler(async (req, res) => {
  let { amount, userId } = req.body;

  const currentUser = await userModel.findOne({ userId });
  const {
    userEmail,
    bankIfsc,
    bankName,
    bankBranch,
    bankAccountNo,
    bankHolderName,
    bankAccountType,
    bankPan,
    customerIncome,
    selfIncomePer,
    tradingPer,
    levelIncome,
  } = currentUser;
const withAmount = amount;
  if (
    parseInt(amount) >
    customerIncome + selfIncomePer + tradingPer + levelIncome
  )
    return res.status(402).json({ message: "Withdraw valid amount" });
  if (bankAccountNo === "" || bankIfsc === "")
    return res.status(403).json({ message: "Bank Details not provided" });

  //deduct from customer income
  if (amount >= customerIncome) {
    currentUser.customerIncome = 0;
    amount =amount-customerIncome
  }
  else if(amount < customerIncome){
    currentUser.customerIncome = currentUser.customerIncome -amount;
    amount = 0;
  }

  //deduct from selfper

  if (amount >= selfIncomePer) {
    currentUser.selfIncomePer = 0;
    amount =amount-selfIncomePer
  }
  else if(amount < selfIncomePer){
    currentUser.selfIncomePer = currentUser.selfIncomePer -amount;
    amount = 0;
  }

  //deduct from trading per

  if (amount >= tradingPer) {
    currentUser.tradingPer = 0;
    amount =amount-tradingPer
  }
  else if(amount < tradingPer){
    currentUser.tradingPer = currentUser.tradingPer -amount;
    amount = 0;
  }

  //deduct from levelincome

  if (amount >= levelIncome) {
    currentUser.levelIncome = 0;
    amount =amount-levelIncome
  }
  else if(amount < levelIncome){
    currentUser.levelIncome = currentUser.levelIncome -amount;
    amount = 0;
  }

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
    withdrawAmount: withAmount,
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
