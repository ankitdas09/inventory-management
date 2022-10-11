import mongoose from "mongoose";

mongoose
	.connect(process.env.MONGOURL)
	.then(() => console.log("Connected"))
	.catch(() => console.log("DB Connection failed!"));
