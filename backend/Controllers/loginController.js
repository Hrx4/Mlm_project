const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/UserModel").default;

const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ userEmail: email });
  if (!user) return res.status(400).json({ message: "Email not found" });
  if (user.userPassword !== password)
    return res.status(400).json({ message: "Password not matched" });
  return res.status(200).json(user);
});

module.exports = { LoginUser };
