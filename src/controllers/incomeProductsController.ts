import IncomeProductsModel from "../models/IncomeProductsModel";

let income = {};

export default class incomeProductsController {
    static async incomeProducts(req:any, res:any) {
        // const {
        //     transactionId,
        //     productId,
        //     productQuantity,
        //     discount,
        //     value

        // } = req.body;

        // income = {
        //     transactionId,
        //     productId,
        //     productQuantity,
        //     discount,
        //     value
        // };


        const data = req.body

        console.log(data)

        data.map(async(product:object) => {
            
            if (product===null) return
             const response = await IncomeProductsModel.create(product);
               
                console.log(response)
           
        })



        // try {
        //     const addIncomeProduct = await IncomeProductModel.create(income);
        //     res.status(200).send({ message: "Lista de produtos adicionada" });
        //     return;
        // } catch (err) {
        //     res.status(404).send({ message: "Insira todas as informações" });
        //     console.info(err);
        //     return;
        // }
    }
}
