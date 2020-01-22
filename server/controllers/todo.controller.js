const HttpStatus = require("http-status-codes");
const todo = require("../models/todo.model");
const user = require("../models/user.model");

module.exports.get = async (req, res) => {
  const { id } = req.params;

  const userExist = await user.findOne({ _id: id });
  if (!userExist)
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ success: false, message: "User is not found" });
  const todoExist = await todo
    .findOne({ userId: id })
    .select("-_id +userId +data -__v");
  if (!todoExist)
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ success: false, message: "Todo List is empty" });
  return res
    .status(HttpStatus.OK)
    .json({ success: true, data: todoExist.data });
};

module.exports.post = async (req, res) => {
  const list = new todo({
    userId: req.body.userId,
    data: req.body.data
  });
  try {
    await list.save();
    return res.status(HttpStatus.CREATED).json({
      success: true
    });
  } catch (err) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, message: err });
  }
};

module.exports.update = async (req, res) => {
  try {
    await todo.findOneAndUpdate(
      { userId: req.body.userId },
      {
        userId: req.body.userId,
        data: req.body.data
      }
    );
    return res.status(HttpStatus.OK).json({
      success: true
    });
  } catch (err) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, message: err });
  }
};
