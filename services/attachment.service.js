import Attachment from "../models/Attachment.js";

export const saveAttachment = async (ticketId,userId,file) => {
	const attachment = await Attachment.create({
		ticket: ticketId,
		uploadedBy: userId,
		fileName: file.originalname,
		filePath: file.path,
		fileType: file.mimetype,
		fileSize: file.size
	});

	return attachment;
};
