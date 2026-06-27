import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		companyName: {
			type: String,
			required: true,
		},
		billingReference: String,
		isVerified: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("ClientAccount",clientSchema);
