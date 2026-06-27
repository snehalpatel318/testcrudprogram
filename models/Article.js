import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		category: {
			type: String,
		},

		status: {
			type: String,
			enum: ["draft", "published"],
			default: "draft",
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("Article",articleSchema);
