import express from "express";
const app = express();
import dotenv from "dotenv";


dotenv.config();
import server from "./server/server";


app.use(server);
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});
