import express from "express";
import authRoutes from "./routes/auth.routes.js";
import clientRoutes from "./routes/client.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import attachmentRoutes from "./routes/attachment.routes.js";
import articleRoutes from "./routes/article.routes.js";
import reportRoutes from "./routes/report.routes.js";
import "./events/ticket.events.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/clients",clientRoutes);
app.use("/api/tickets",ticketRoutes);
app.use("/api/comments",commentRoutes);
app.use("/api/attachments",attachmentRoutes);
app.use("/api/articles",articleRoutes);
app.use("/api/reports",reportRoutes);

app.use(errorMiddleware);

export default app;
