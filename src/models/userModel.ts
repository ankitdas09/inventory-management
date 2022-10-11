import mongoose, { Schema, model } from "mongoose";

export interface IUser {
	name: string;
	email: string;
	password: string;
	avatar?: string;
	isAdmin: boolean;
}

const userSchema = new Schema<IUser>({
	name: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: },
	password: { type: String, required: true },
	avatar: { type: String, required: true },
	isAdmin: { type: Boolean, required: true, default: false },
});

const userModel = model<IUser>("User", userSchema);

export default userModel;
