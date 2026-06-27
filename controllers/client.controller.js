import {getClients,verifyClient,deactivateClient,} from "../services/client.service.js";

export const listClients = async (req, res) => {
	try {
		const clients = await getClients();

		res.json({
			success: true,
			data: clients,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export const verify = async (req, res) => {
	try {
		const client = await verifyClient(req.params.id,req.user._id,);

		res.json({
			success: true,
			data: client,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export const deactivate = async (req, res) => {
	try {
		const client = await deactivateClient(req.params.id,req.user._id);

		res.json({
			success: true,
			data: client,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};
