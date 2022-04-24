export default class homeController {
    static async home(req:any, res:any) {
        res.status(200).send({ message: "Bem vindo ao Simple ERP" });
    }
};