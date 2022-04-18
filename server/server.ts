import express from "express";
import cors from "cors";
const server = express();

server.use(express.json());
const corsOptions = {
    origin: "http://localhost",
    optionsSuccessStatus: 200, // for some legagy browsers
};

server.use(cors(corsOptions));
//Routers Injection
import homeRouter from "../src/routers/homeRouter";
import stockRouter from "../src/routers/stockRouter";

server.use(homeRouter);
server.use(stockRouter);

export default server;
