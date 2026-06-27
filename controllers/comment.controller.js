import { addComment, getComments } from "../services/comment.service.js";

export const createComment = async (req, res) => {
	try {
		const comment = await addComment(req.params.ticketId,req.user._id,req.body.message);

		res.json({
			success: true,
			data: comment,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export const listComments = async (req, res) => {
	try {
		const comments = await getComments(req.params.ticketId);

		res.json({
			success: true,
			data: comments,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};
