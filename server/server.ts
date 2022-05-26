import express from "express";
import cors from "cors";
const server = express();

server.use(express.json());
const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // for some legagy browsers
};

server.use(cors(corsOptions));
//Routers Injection

//Admin
import userRouter from "../src/admin/userRouter";
server.use("/admin", userRouter);

//Routes
import homeRouter from "../src/routers/homeRouter";
import stockRouter from "../src/routers/stockRouter";
import clientRouter from "../src/routers/clientRouter";
import addressRouter from "../src/routers/addressRouter";
import categoryRouter from "../src/routers/categoryRouter";
import contactRouter from "../src/routers/contactRouter";
import productRouter from "../src/routers/productRouter";
import saleRouter from "../src/routers/saleRouter";
import saleProductRouter from "../src/routers/saleProductRouter";
import incomeRouter from "../src/routers/incomeRouter";
import incomeProductRouter from "../src/routers/incomeProductRouter";
import supplierRouter from "../src/routers/supplierRouter";
import testRouter from "../src/testAuth/testRouter"



server.use(homeRouter);
server.use(stockRouter);
server.use(addressRouter);
server.use(categoryRouter);
server.use(clientRouter);
server.use(contactRouter);
server.use(productRouter);
server.use(saleRouter);
server.use(saleProductRouter);
server.use(supplierRouter);
server.use(incomeRouter);
server.use(incomeProductRouter);
server.use(testRouter)


export default server;
