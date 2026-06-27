import Ticket from "../models/Ticket.js";
import ClientAccount from "../models/ClientAccount.js";
import StatusHistory from "../models/StatusHistory.js";
import { pagination } from "../utils/pagination.js";
import eventEmitter from "../events/eventEmitter.js";

export const createTicket = async (data, userId) => {
	const client = await ClientAccount.findOne({user: userId,});

	if (!client) {
		throw new Error("Client account not found");
	}

	if (!client.isVerified) {
		throw new Error("Client not verified");
	}

	const ticket = await Ticket.create({...data,client: userId,});

	await StatusHistory.create({ticket: ticket._id,oldStatus: null,newStatus: "open",changedBy: userId,});

	return ticket;
};

export const getTickets = async (query) => {
	const {page,limit,status,} = query;

	const filter = {};

	if (status) {
		filter.status = status;
	}
	const tickets = await Ticket.find(filter).populate("client", "name email").populate("assignedTo", "name email").skip(pagination(page, limit).skip).limit(pagination(page, limit).limit);
	return tickets;
};

export const changeStatus = async (ticketId,newStatus,userId) => {
	const ticket = await Ticket.findById(ticketId);

	if (!ticket) {
		throw new Error("Ticket not found");
	}

	const oldStatus = ticket.status;

	ticket.status = newStatus;

	await ticket.save();

	await StatusHistory.create({
		ticket: ticketId,
        oldStatus,
		newStatus,changedBy: userId
	});

	return ticket;
};

export const assignTicket = async (ticketId,agentId) => {
	const ticket = await Ticket.findById(ticketId);

	if (!ticket) {
		throw new Error("Ticket not found");
	}

	ticket.assignedTo=agentId;
	eventEmitter.emit("ticketAssigned",{ticketId:ticketId,agentId:agentId});

	await ticket.save();

	return ticket;
};
