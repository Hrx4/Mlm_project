const asyncHandler = require("express-async-handler");
const UserModel = require("../Models/userModel");

const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user = await UserModel.findOne({ userEmail: email });
  let total 
  try {
    if (!user) return res.status(400).json({ message: "Email not found" });
  if (user.userPassword !== password)
    return res.status(400).json({ message: "Password not matched" });
     total =user?.childUsers.length;
  const userdata = user?.childUsers?.map(async(item , index)=>{
    let currentUser = await UserModel.findOne({userId : item});
     total+=currentUser?.levelChild.length
    return total

  })
  const dataArray = await Promise.all(userdata);
console.log('====================================');
console.log(dataArray);
console.log('====================================');
  
  } catch (error) {
    throw new Error(error)
  }

  return res.status(200).json( {"user" : user , "totalTeam" : total});
});

module.exports = { LoginUser };
