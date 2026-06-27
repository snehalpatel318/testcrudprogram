import {createTicket,getTickets,changeStatus,assignTicket} from "../services/ticket.service.js";

export const create = async (req, res) => {
	try {
		const ticket = await createTicket(req.body,req.user._id);

		res.status(201).json({
			success: true,
			data: ticket,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export const list = async (req, res) => {
	try {
		const tickets = await getTickets(req.query);
		res.json({
			success: true,
			data: tickets,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export const updateStatus = async (req, res) => {
	try {
		const ticket = await changeStatus(req.params.id,req.body.status,req.user._id);

		res.json({
			success: true,
			data: ticket,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export const assign = async (req, res) => {
	try {
		const ticket = await assignTicket(req.params.id,req.body.agentId);

		res.json({
			success: true,
			data: ticket,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};
