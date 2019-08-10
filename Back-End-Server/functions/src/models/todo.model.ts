import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
	userID: {
		type: String,
		require: true,
		min: 6,
		max: 255
	}
});

export default model('todo-lists', TodoSchema);