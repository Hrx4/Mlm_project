const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/userModel").default;
const { default: ShortUniqueId } = require("short-unique-id");
const idList = require("../Models/idList");
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
  const randomId = randomUUID();
  const createList = await idList.create({
    userName,
    userId: randomId,
    userCodeId: "",
  });
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
        { $push: { levelChild: randomId } }
      );
    });
    parentUser.childUsers.push(randomId);

    const updatedUser = await parentUser.save();
  }
  console.log("====================================");
  console.log({ intr: introducerCode });
  console.log("====================================");

  const user = await UserModel.create({
    userId: randomId,
    introducerCode,
    introducerName,
    userName,
    userMobile,
    userEmail,
    userCountry,
    userState,
    userPassword,
    childUsers: [],
    levelParent: parentChild,
    levelChild: [],
    userFather: "",
    userDob: "",
    userAdhar: "",
    userGender: "",
    userNominee: "",
    userNomineeRelation: "",
    bankIfsc: "",
    bankName: "",
    bankBranch: "",
    bankAccountNo: "",
    bankHolderName: "",
    bankAccountType: "",
    bankPan: "",
    kycPan: "",
    kycAdharFront: "",
    kycAdharBack: "",
    kycBank: "",
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
