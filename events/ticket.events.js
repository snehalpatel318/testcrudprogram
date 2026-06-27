import eventEmitter from "./eventEmitter.js";
import Notification from "../models/Notification.js";

eventEmitter.on("ticketAssigned",
    async (data) => {
		await Notification.create({
			user: data.agentId,
			message: `Ticket assigned ${data.ticketId}`,
		});
		console.log("Notification created");
	},
);

export default eventEmitter;
