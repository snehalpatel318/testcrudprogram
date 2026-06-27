import Ticket from "../models/Ticket.js";
import cache from "../config/cache.js";

export const dashboardReport = async () => {
	const cached = cache.get("dashboard");

	if (cached) {
		return cached;
	}

	const total = await Ticket.countDocuments();

	const open = await Ticket.countDocuments({status: "open",});

	const resolved = await Ticket.countDocuments({status: "resolved",});

	const data = {total,open,resolved};

	cache.set(
		"dashboard",
		data,
	);

	return data;
};

export const agentWorkload = async () => {
	return await Ticket.aggregate([
		{
			$group: {
				_id: "$assignedTo",
				total: {
					$count: {},
				},
			},
		},
	]);
};

export const clientTickets = async (userId) => {
	return await Ticket.find({
		client: userId,
	});
};
