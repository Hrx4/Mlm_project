const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/UserModel");
const { default: ShortUniqueId } = require("short-unique-id");
const { randomUUID } = new ShortUniqueId({ length: 10 });

const createUser = asyncHandler(async (req, res) => {
  const {
    introducerCode,
    introducerName,
    userName,
    userMobile,
    userEmail,
    userPan,
    userCountry,
    userState,
  } = req.body;
const randomId = randomUUID();
  if (introducerCode !== "") {
    const parentUser = await UserModel.findOneAndUpdate(
      { userId: introducerCode },
      { $push: { childUsers: randomId } }
      
    )
    if(parentUser===null) return res.status(404).json({message : "Invalid Introductur Code"})
    console.log("====================================");
    console.log(parentUser);
    console.log("====================================");
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
    userPan,
    userCountry,
    userState,
    childUsers: [],
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

module.exports = { createUser };
