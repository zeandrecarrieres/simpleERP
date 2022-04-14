module.exports = class homeController {
    static async home(req, res){
        res.status(200).send({message: "Bem vindo ao Simple ERP"})
    }
}