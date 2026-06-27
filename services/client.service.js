import ClientAccount from "../models/ClientAccount.js";
import AuditLog from "../models/AuditLog.js";

export const getClients = async () => {
	return await ClientAccount.find().populate("user", "name email");
};

export const verifyClient = async (id, userId) => {
	const client = await ClientAccount.findById(id);

	if (!client) {
		throw new Error("Client not found");
	}

	client.isVerified = true;

	await client.save();

	await AuditLog.create({user: userId,action: "CLIENT_VERIFIED",entityType: "ClientAccount",entityId: id});

	return client;
};

export const deactivateClient = async (id, userId) => {
	const client = await ClientAccount.findById(id);

	if (!client) {
		throw new Error("Client not found");
	}

	client.isActive = false;

	await client.save();

	await AuditLog.create({user: userId,action: "CLIENT_DEACTIVATED",entityType: "ClientAccount",entityId: id});

	return client;
};
