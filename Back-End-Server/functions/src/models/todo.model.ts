import { Schema, model, Document } from 'mongoose';

export interface Thing {
	id: number;
	content: string;
	isDone: boolean;
}
export interface Things {
	id: number;
	title: string;
	values: Thing[];
}

export interface IUser extends Document {
	userId: string;
	data: Things[];
}

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
				require: true,
			},
			title: String,
			values: [
				{
					id: {
						type: Number,
						require: true,
					},
					content: String,
					isDone: Boolean
				},
			]
		}
	]
});

export default model<IUser>('todos', TodoSchema);