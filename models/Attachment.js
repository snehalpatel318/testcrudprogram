import mongoose from "mongoose";

const attachmentSchema = new mongoose.Schema(
	{
		ticket: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Ticket",
		},
		uploadedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		fileName: String,
		filePath: String,
		fileType: String,
		fileSize: Number,
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("Attachment", attachmentSchema);
