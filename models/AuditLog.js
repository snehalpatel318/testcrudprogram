import mongoose from "mongoose";

const auditSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		action: {
			type: String,
		},
		entityType: {
			type: String,
		},
		entityId: {
			type: String,
		},
		metadata: {
			type: Object,
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("AuditLog",auditSchema);
