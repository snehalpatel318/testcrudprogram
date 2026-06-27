import {dashboardReport,agentWorkload,clientTickets,} from "../services/report.service.js";

export const dashboard = async (req, res) => {
	const data = await dashboardReport();
	res.json({
		success: true,
		data,
	});
};

export const workload = async (req, res) => {
	const data = await agentWorkload();
	res.json({
		success: true,
		data,
	});
};

export const myTickets = async (req, res) => {
	const data = await clientTickets(req.user._id);

	res.json({
		success: true,
		data,
	});
};
