const asyncHandler = require("express-async-handler");
const userModel = require("../Models/userModel");
const tradingModal = require("../Models/tradingModal");
const refundModel = require("../Models/refundModel");

const createTrading = asyncHandler(async (req, res) => {
  const { tradingAmount, tradingPhoto, tradingId, userId } = req.body;

  //   const currentUser = await userModel.findOne({ userId });
  //   if (parseInt(amount) > currentUser.totalIncome)
  //     return res.status(402).json({ message: "Withdraw valid amount" });
  //   if (currentUser.bankAccountNo === "" || currentUser.bankIfsc === "")
  //     return res.status(403).json({ message: "Bank Details not provided" });
  await userModel.findOneAndUpdate(
    { userId: userId },
    {
      tradingId: tradingId,
      // $inc : {tradingAmount : tradingAmount}
    }
  );

  const trading = await tradingModal.create({
    tradingAmount,
    tradingPhoto,
    tradingId,
    userId,
  });
  res.status(200).json(trading);
});

const tradingAccept = asyncHandler(async (req, res) => {
  const { rowId, tradId, tradAmount } = req.body;

  await userModel.findOneAndUpdate(
    { tradingId: tradId },
    {
      $inc: { tradingAmount: tradAmount },
    }
  );

  const currentUser = await tradingModal.findByIdAndUpdate(rowId, {
    tradingStatus: "Accepted",
  });

  res.status(201).json(currentUser);
});

const userTrading = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  let user = await tradingModal.find(userId);
  user = user.filter((item) => item.userId === userId);
  res.status(200).json(user);
});

const allTrading = asyncHandler(async (req, res) => {
  let user = await tradingModal.find();
  res.status(200).json(user);
});

const createRefund = asyncHandler(async (req, res) => {
  const { tradingId, tradingAmount, tradingPer, refundAmount, refundMonth } =
    req.body;
  const user = await refundModel.create({
    tradingId,
    tradingAmount,
    tradingPer,
    refundAmount,
    refundMonth,
  });
  res.status(200).json(user);
});

const refundAccept = asyncHandler(async (req, res) => {
  const { rowId , refundPic} = req.body;
  const user = await refundModel.findByIdAndUpdate(rowId, {
    refundStatus: "Refunded",
    refundPic : refundPic
  });
  res.status(200).json(user);
});

const getRefundList = asyncHandler(async (req, res) => {  
  const user = await refundModel.find();
  res.status(200).json(user);
});

const refundAdminAccept = asyncHandler(async (req, res) => {
  const { rowId , tradingId , tradingAmount  } = req.body;
  const user = await refundModel.findByIdAndUpdate(rowId, {
    refundStatus: "Refund Accepted",
  });
  await userModel.findOneAndUpdate({tradingId} , {
    $inc : {tradingPer : parseInt(tradingAmount * .07) }
  })
  res.status(200).json(user);
});

module.exports = {
  createTrading,
  tradingAccept,
  userTrading,
  allTrading,
  refundAccept,
  createRefund,
  getRefundList,
  refundAdminAccept
};
