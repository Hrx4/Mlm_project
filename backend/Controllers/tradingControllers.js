const asyncHandler = require("express-async-handler");
const userModel = require("../Models/userModel");
const tradingModal = require("../Models/tradingModal");

const createTrading = asyncHandler(async (req, res) => {
  const { tradingAmount , tradingPhoto , tradingId, userId } = req.body;

//   const currentUser = await userModel.findOne({ userId });
//   if (parseInt(amount) > currentUser.totalIncome)
//     return res.status(402).json({ message: "Withdraw valid amount" });
//   if (currentUser.bankAccountNo === "" || currentUser.bankIfsc === "")
//     return res.status(403).json({ message: "Bank Details not provided" });


  const trading = await tradingModal.create({
    tradingAmount , tradingPhoto , tradingId, userId
  });
  res.status(200).json(trading);
});

const tradingAccept = asyncHandler(async (req, res) => {
  const { rowId } = req.body;

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

module.exports = {
  createTrading , tradingAccept , userTrading , allTrading
};
