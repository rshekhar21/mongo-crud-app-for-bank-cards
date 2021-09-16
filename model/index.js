const mongoose = require("mongoose");
const schema = mongoose.Schema;
const collection = "card";
const md5 = require("md5");
const { isEmail } = require("validator");

const creditSchema = new schema(
  {
    number: { type: String, required: true, unique: true },
    issuer: { type: String, required: true, uppercase: true },
    expiary: { type: String },
    since: { type: String },
    status: { type: String },
    acntype: { type: String }, //credi/debit
    type: { type: String }, // visa/mater
    name: { type: String, uppercase: true },
    limit: { type: Number, maxLength: 7 },
    cvv: { type: Number, maxLength: 4 },
    pin: { type: Number },
    billdate: { type: Number },
    stmtpwd: { type: String },
    helpline: { type: String },
    loginurl: { type: String, lowercase: true },
    website: { type: String, lowercase: true },
    notes: { type: String },
  },
  { timestamps: true }
);

creditSchema.pre("save", async function () {});

const model = mongoose.model(collection, creditSchema);
module.exports = model;
