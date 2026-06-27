import Article from "../models/Article.js";

export const createArticle = async (data, userId) => {
	const article = await Article.create({
		title: data.title,
		content: data.content,
		category: data.category,
		status: data.status || "draft",
		createdBy: userId,
	});

	return article;
};

export const getArticles = async (search) => {
	let filter = {
		status: "published",
	};

	if (search) {
		filter.title = {
			$regex: search,

			$options: "i",
		};
	}

	return await Article.find(filter).populate("createdBy","name email",);
};

export const getArticleById = async (id) => {
	const article = await Article.findById(id);

	if (!article) {
		throw new Error("Article not found");
	}

	return article;
};

export const updateArticle = async (id, data) => {
	const article = await Article.findById(id);

	if (!article) {
		throw new Error("Article not found");
	}

	article.title = data.title || article.title;

	article.content = data.content || article.content;

	article.category = data.category || article.category;

	article.status = data.status || article.status;

	await article.save();

	return article;
};
