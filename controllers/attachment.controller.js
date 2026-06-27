import { saveAttachment } from "../services/attachment.service.js";

export const uploadFile = async (req, res) => {
	try {
		const attachment = await saveAttachment(req.params.ticketId,req.user._id,req.file);

		res.json({
			success: true,
			data: attachment,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};
