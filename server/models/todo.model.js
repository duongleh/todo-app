const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  userId: {
    type: String,
    require: true,
    min: 6,
    max: 255
  },
  data: [
    {
      id: {
        type: Number,
        require: true
      },
      title: String,
      values: [
        {
          id: {
            type: Number,
            require: true
          },
          content: String,
          isDone: Boolean
        }
      ]
    }
  ]
});

module.exports = mongoose.model("todos", TodoSchema);
