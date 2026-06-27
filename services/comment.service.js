import Comment from "../models/Comment.js";

import Ticket from "../models/Ticket.js";

export const addComment = async (ticketId,userId,message) => {
	const ticket = await Ticket.findById(ticketId);

	if (!ticket) {
		throw new Error("Ticket not found");
	}

	const comment = await Comment.create({ticket: ticketId,user: userId,message});

	return comment;
};

export const getComments = async (ticketId) => {
	return await Comment.find({
		ticket: ticketId,
	}).populate("user", "name email");
};
