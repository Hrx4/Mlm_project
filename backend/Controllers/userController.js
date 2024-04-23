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
  } = req.body;
  

  try {
    const createList = await idList.create({
      userName,
      userId: "",
      introducerCode : introducerCode,
      userEmail : userEmail
    });

    
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    throw new Error(`Error : ${error.message}`)

  }
  const user = await UserModel.create({
    userId: "",
    introducerCode,
    introducerName,
    userName,
    userMobile,
    userEmail,
    userCountry,
    userState,
    userPassword,
  });
  res.status(200).json(user);
});

// const getApply = asyncHandler(async (req, res) => {
//   const applies = await applyModels.find();
//   res.status(200).json(applies);
// });

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
  console.log("====================================");
  console.log(updatedUser);
  console.log("====================================");
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
  console.log("====================================");
  console.log(updatedUser);
  console.log("====================================");
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
  console.log("====================================");
  console.log(updatedUser);
  console.log("====================================");
  res.status(201).json(updatedUser);
});

module.exports = { createUser, updateBankInfo, updateKyc, updateProfile };
