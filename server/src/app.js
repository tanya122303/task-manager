import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import usersRoutes from "./routes/users.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

dotenv.config(); // reads .env file automatically

const app = express(); //creates server instance

app.use(cors()); //allows frontend to talk to backend 5000
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Tassk Manager API is running",
    status: "ok",
  });
});

app.use("/api/users", usersRoutes);
app.use("/api/tasks", tasksRoutes);

export default app;
