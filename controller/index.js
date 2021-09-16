const model = require("../model");
const log = console.log;

const create = async (req, res) => {
  // log(req.body);
  const {
    number,
    issuer,
    expiary,
    since,
    status,
    acntype,
    type,
    name,
    limit,
    cvv,
    pin,
    billdate,
    stmtpwd,
    helpline,
    loginurl,
    website,
    notes,
  } = req.body;

  if (number === "" || issuer === "")
    return res.send("Card Number and Issuer is Must");

  const card = {
    number,
    issuer,
    expiary,
    since,
    status,
    acntype,
    type,
    name,
    limit,
    cvv,
    pin,
    billdate,
    stmtpwd,
    helpline,
    loginurl,
    website,
    notes,
  };
  try {
    const result = await model.create(card);
    // res.send(result);
    // log(result);
    res.redirect("/newcard");
  } catch (error) {
    log(error);
  }
};
const read = async (req, res) => {
  try {
    const result = await model.find();
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};
const edit = async (req, res) => {
  const { id: _id } = req.body;
  try {
    const result = await model.findById(_id);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const update = async (req, res) => {
  const {
    number,
    issuer,
    expiary,
    since,
    status,
    acntype,
    type,
    name,
    limit,
    cvv,
    pin,
    billdate,
    stmtpwd,
    helpline,
    loginurl,
    website,
    notes,
  } = req.body;

  if (number === "" || issuer === "")
    return res.send("Card Number and Issuer is Must");

  const card = {
    number,
    issuer,
    expiary,
    since,
    status,
    acntype,
    type,
    name,
    limit,
    cvv,
    pin,
    billdate,
    stmtpwd,
    helpline,
    loginurl,
    website,
    notes,
  };
  try {
    let result = await model.findByIdAndUpdate(req.body._id, card);
    res.redirect("/list");
  } catch (error) {
    res.json(error);
  }
  // res.json("ok-123");
};

const delcard = (req, res) => {};
const showcard = (req, res) => {};

module.exports = { create, read, update, delcard, showcard, edit };
