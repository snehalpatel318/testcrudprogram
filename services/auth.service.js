import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";

export const registerUser = async (data) => {
	const { name, email, password, staffRegister, staffCode, role, adminSecret } =
		data;

	let userRole = "client";
	if (staffRegister) {
		if (staffCode !== process.env.STAFF_CODE) {
			throw new Error("Invalid registration details");
		}
		userRole = role || "agent";
	}

	if (adminSecret) {
		if (adminSecret !== process.env.ADMIN_SECRET) {
			throw new Error("Invalid registration details");
		}
		userRole = "admin";
	}

	const hashPassword = await bcrypt.hash(password,Number(process.env.BCRYPT_ROUNDS));

	const user = await User.create({name,email,password: hashPassword,role: userRole});

	return user;
};

export const loginUser = async (email, password) => {
	const user = await User.findOne({ email }).select("+password");

	if (!user) {
		throw new Error("Invalid credentials");
	}

	const match = await bcrypt.compare(password, user.password);

	if (!match) {
		throw new Error("Invalid credentials");
	}

	const token = generateToken(user);

	user.password = undefined;

	return {
		user,
		token,
	};
};
