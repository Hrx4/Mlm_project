const asyncHandler = require("express-async-handler");
const { default: ShortUniqueId } = require("short-unique-id");
const idList = require("../Models/idList");
const UserModel = require("../Models/userModel");
const { randomUUID } = new ShortUniqueId({ length: 10 });

const createUser = asyncHandler(async (req, res) => {
  const {
    introducerCode,
    introducerName,
    userName,
    userMobile,
    userEmail,
    userCountry,
    userState,
    userPassword,
    userId,
    userAdhar,
    userDob,
    bankPan,
    customer,
  } = req.body;

  const currentUser = await UserModel.findOne({ userEmail: userEmail });
  const intCheck = await UserModel.findOne({ userId: introducerCode });
  if (currentUser) throw new Error("Change the email");
  if (introducerCode !== "" && intCheck.userStatus !== "Active") {
    return res.status(400).json({message : "Introducer not active"})
  }
  

  const user = await UserModel.create({
    userId: userId,
    introducerCode,
    introducerName,
    userName,
    userMobile,
    userEmail,
    userCountry,
    userState,
    userPassword,
    userAdhar,
    userDob,
    bankPan,
    customer,
  });
  try {
     await idList.create({
      userName,
      userId: userId,
      introducerCode: introducerCode,
      userEmail: userEmail,
      customer,
    });
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    throw new Error(`Error : ${error.message}`);
  }
  return res.status(200).json(user);
});

const getUser = asyncHandler(async (req, res) => {
  const { userEmail, userId } = req.body;
  let user;
  console.log("====================================");
  console.log(userId);
  console.log("====================================");
  if (userId) user = await UserModel.find({ userId });
  else user = await UserModel.find({ userEmail });
  res.status(200).json(user);
});

const getAllUser = asyncHandler(async (req, res) => {
  const { userList } = req.body;

  let list = userList.map(async (item, index) => {
    let user = await UserModel.find({ userId: item });
    user = await Promise.all(user);
    return user[0];
  });
  res.status(200).json(await Promise.all(list));
});

const getAllUserNo = asyncHandler(async (req, res) => {
  let user = await UserModel.find();
  res.status(200).json(user);
});

// const deleteApply = asyncHandler(async (req, res) => {
//   const apply = await applyModels.findById(req.params.id);
//   console.log(req.params.id);
//   if (!apply) {
//     res.status(404);
//     throw new Error("Apply not found");
//   }

//   await applyModels.deleteOne({ _id: req.params.id });
//   res.status(200).json(apply);
// });

const updateBankInfo = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const {
    bankIfsc,
    bankName,
    bankBranch,
    bankAccountNo,
    bankHolderName,
    bankAccountType,
    bankPan,
  } = req.body;

  const updatedUser = await UserModel.findOneAndUpdate(
    { userId: userId },
    {
      bankIfsc,
      bankName,
      bankBranch,
      bankAccountNo,
      bankHolderName,
      bankAccountType,
      bankPan,
    }
  );
  res.status(201).json(updatedUser);
});

const updateKyc = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { kycPan, kycAdharFront, kycAdharBack, kycBank } = req.body;

  const updatedUser = await UserModel.findOneAndUpdate(
    { userId: userId },
    {
      kycPan,
      kycAdharFront,
      kycAdharBack,
      kycBank,
    }
  );
  res.status(201).json(updatedUser);
});

const updatePassword = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { userPassword, newUserPassword } = req.body;

  const updatedUser = await UserModel.findOne({ userId: userId });
  if (updatedUser.userPassword !== userPassword)
    throw new Error("Wrong Password");
  updatedUser.userPassword = newUserPassword;
  await updatedUser.save();
  res.status(201).json(updatedUser);
});

const updateProfile = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const {
    userName,
    userMobile,
    userEmail,
    userCountry,
    userState,
    userFather,
    userDob,
    userAdhar,
    userGender,
    userNominee,
    userNomineeRelation,
  } = req.body;

  const updatedUser = await UserModel.findOneAndUpdate(
    { userId: userId },
    {
      userName,
      userMobile,
      userEmail,
      userCountry,
      userState,
      userFather,
      userDob,
      userAdhar,
      userGender,
      userNominee,
      userNomineeRelation,
    }
  );
  res.status(201).json(updatedUser);
});

const updateUser = asyncHandler(async (req, res) => {
  const {
    userName,
    userMobile,
    userEmail,
    userPassword,
    userCountry,
    userState,
    userFather,
    userDob,
    userAdhar,
    userGender,
    userNominee,
    userNomineeRelation,
    bankIfsc,
    bankName,
    bankBranch,
    bankAccountNo,
    bankHolderName,
    bankAccountType,
    bankPan,
  } = req.body;

  const user = await UserModel.findOneAndUpdate(
    { userEmail },
    {
      userName,
      userMobile,
      userEmail,
      userPassword,
      userCountry,
      userState,
      userFather,
      userDob,
      userAdhar,
      userGender,
      userNominee,
      userNomineeRelation,
      bankIfsc,
      bankName,
      bankBranch,
      bankAccountNo,
      bankHolderName,
      bankAccountType,
      bankPan,
    }
  );

  res.status(201).json(user);
});

const adminUserList = asyncHandler(async (req, res) => {
  const list = await UserModel.find();
  res.status(200).json(list);
});

const selfIncomeIncraement = asyncHandler(async (req, res) => {
  let list = await UserModel.find();

  // const month = new Date().getDate()

  for (let item of list) {
    item.selfIncomePer +=
      parseInt((item.selfIncome + item.selfIncomePer) * 0.05) +
      parseInt(item.selfIncomeHalf * 0.025);
    item.selfIncome += item.selfIncomeHalf;
    item.selfIncomeHalf = 0;
    console.log("====================================");
    console.log(item);
    console.log("====================================");
    await item.save();
  }
  // await list.save()
  //  res.status(200).json(list);
});

const getCustomerList = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const userList = await UserModel.findOne({ userId });
  res.status(200).json(userList);
});

module.exports = {
  createUser,
  updateBankInfo,
  updateKyc,
  updateProfile,
  getUser,
  getAllUser,
  updatePassword,
  updateUser,
  adminUserList,
  getAllUserNo,
  selfIncomeIncraement,
  getCustomerList,
};
