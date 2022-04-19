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
import clientRouter from "../src/routers/clientRouter";
import addressRouter from "../src/routers/addressRouter";
import categoryRouter from "../src/routers/categoryRouter";
import contactRouter from "../src/routers/contactRouter";
import productRouter from "../src/routers/productRouter";
import saleRouter from "../src/routers/saleRouter";
import saleProductRouter from "../src/routers/saleProductRouter";



server.use(homeRouter);
server.use(stockRouter);
server.use(addressRouter);
server.use(categoryRouter);
server.use(clientRouter);
server.use(contactRouter);
server.use(productRouter);
server.use(saleRouter);
server.use(saleProductRouter);

export default server;
