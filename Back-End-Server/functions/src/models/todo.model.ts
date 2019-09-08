import { Schema, model, Document } from 'mongoose';

export interface Thing extends Document {
	id: number;
	content: string;
	isDone: boolean;
}
export interface Things extends Document {
	id: number;
	title: string;
	values: Array<Thing>;
}

export interface IUser extends Document {
	userId: string;
	data: Array<Things>;
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