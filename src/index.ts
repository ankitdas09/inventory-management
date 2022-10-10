import express from "express";
import { Application } from "express";

import userRoutes from "./routes/userRoutes";

const app: Application = express();
const PORT: number = 8080;

app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
	console.log("Listening on PORT", PORT);
});
