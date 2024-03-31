const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
      index: true,
    },
    childUsers: {
      type: [],
    },
    levelParent: {
      type: [],
    },
    levelChild: {
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
      require: true,
    },
    userMobile: {
      type: Number,
      require: true,
    },
    userEmail: {
      type: String,
      require: true,
    },
    userPassword: {
      type: String,
      require: true,
    },
    userCountry: {
      type: String,
      require: true,
    },
    userState: {
      type: String,
      require: true,
    },
    userFather: {
      type: String,
    },
    userDob: {
      type: String,
    },
    userAdhar: {
      type: String,
    },
    userGender: {
      type: String,
    },
    userNominee: {
      type: String,
    },
    userNomineeRelation: {
      type: String,
    },
    bankIfsc: {
      type: String,
    },
    bankName: {
      type: String,
    },
    bankBranch: {
      type: String,
    },
    bankAccountNo: {
      type: String,
    },
    bankHolderName: {
      type: String,
    },
    bankAccountType: {
      type: String,
    },
    bankPan: {
      type: String,
    },
    kycPan: {
      type: String,
    },
    kycAdharFront: {
      type: String,
    },
    kycAdharBack: {
      type: String,
    },
    kycBank: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
