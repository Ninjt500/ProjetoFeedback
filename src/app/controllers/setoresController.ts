class SetoresController{
    constructor(){

    }

    GetSetores(req:any, res:any)
    {
        res.send("Acessa a lista de setores");
    }

    GetSetor(req:any, res:any)
    {
        res.send("Acessa um setor específico");
    }

    PostSetor(req:any, res:any)
    {
        res.send("Cria um registro de Setor");
    }

    PatchSetor(req:any, res:any)
    {
        res.send("Atualiza os dados de um setor");
    }

    DeleteSetor(req:any, res:any)
    {
        res.send("Deleta o registro de um setor");
    }

    DeleteSetores(req:any, res:any)
    {
        res.send("Deleta todos os registros de setores");
    }
}

export const setoresController = new SetoresController();