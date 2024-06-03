const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
      index: true,
      unique : true
    },
    tradingId: {
      type: String,
      default: "",
    },
    tradingAmount: {
      type: Number,
      default: 0,
    },
    tradingPer: {
      type: Number,
      default: 0,
    },
    business: {
      type: [],
      default: [],
    },
    userStatus: {
      type: String,
      default: "Not Active",
    },
    totalTeam: {
      type: Number,
      default: 0,
    },
    childUsers: {
      type: [],
      default: [],
    },
    levelParent: {
      type: [],
      default: [],
    },
    levelChild: {
      type: [],
      default: [],
    },
    introducerCode: {
      type: String,
      default: "",
    },
    introducerName: {
      type: String,
      default: "",
    },
    userName: {
      type: String,
      require: true,
    },
    userMobile: {
      type: Number,
      require: true,
    },
    selfIncome: {
      type: Number,
      default: 0,
    },
    selfIncomePer: {
      type: Number,
      default: 0,
    },
    selfIncomeHalf: {
      type: Number,
      default: 0,
    },
    levelIncome: {
      type: Number,
      default: 0,
    },
    totalIncome: {
      type: Number,
      default: 0,
    },
    userEmail: {
      type: String,
      require: true,
      unique: true,
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
      default: "",
    },
    userDob: {
      type: String,
      default: "",
    },
    userAdhar: {
      type: String,
      default: "",
    },
    userGender: {
      type: String,
      default: "",
    },
    userNominee: {
      type: String,
      default: "",
    },
    userNomineeRelation: {
      type: String,
      default: "",
    },
    bankIfsc: {
      type: String,
      default: "",
    },
    bankName: {
      type: String,
      default: "",
    },
    bankBranch: {
      type: String,
      default: "",
    },
    bankAccountNo: {
      type: String,
      default: "",
    },
    bankHolderName: {
      type: String,
      default: "",
    },
    bankAccountType: {
      type: String,
      default: "",
    },
    bankPan: {
      type: String,
      default: "",
    },
    kycPan: {
      type: String,
      default: "",
    },
    kycAdharFront: {
      type: String,
      default: "",
    },
    kycAdharBack: {
      type: String,
      default: "",
    },
    kycBank: {
      type: String,
      default: "",
    },
    membershipFee: {
      type: Number,
      default: 0,
    },
    membershipPhoto: {
      type: String,
      default: "",
    },
    membershipStatus: {
      type: String,
      default: "Null",
    },
    customerIncome : {
      type:Number,
      default : 0
    },
    customerList : {
      type : [],
      default : []
    },
    customer : {
      type : Boolean
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
