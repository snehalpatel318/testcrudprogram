import {createArticle,getArticles,getArticleById,updateArticle} from "../services/article.service.js";

export const create = async (req, res) => {
	try {
		const article = await createArticle(req.body,req.user._id);

		res.status(201).json({
			success: true,
			data: article,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export const list = async (req, res) => {
	try {
		const articles = await getArticles(req.query.search);

		res.json({
			success: true,
			data: articles,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

export const single = async (req, res) => {
	try {
		const article = await getArticleById(req.params.id);

		res.json({
			success: true,
			data: article,
		});
	} catch (error) {
		res.status(404).json({
			message: error.message,
		});
	}
};

export const update = async (req, res) => {
	try {
		const article = await updateArticle(
			req.params.id,
			req.body,
		);

		res.json({
			success: true,
			data: article,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};
