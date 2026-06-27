import mongoose from "mongoose";

const statusHistorySchema = new mongoose.Schema(
	{
		ticket: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Ticket",
		},
		oldStatus: String,
		newStatus: String,
		changedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("StatusHistory",statusHistorySchema);
