const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      
    },
    childUsers: {
      type: [],
      
    },
    introducerCode: {
      type: String,
    },
    introducerName: {
      type: String,
    },
    userName: {
      type: String,
      
    },
    userMobile: {
      type: Number,
      
    },
    userEmail: {
      type: String,
      
    },
    userPan: {
      type: String,
      
    },
    userCountry: {
      type: String,
      
    },
    userState: {
      type: String,
      
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
