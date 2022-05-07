class PessoasController{
    constructor(){

    }

    GetPessoas(req:any, res:any)
    {
        res.send("Acessa a lista de pessoas");
    }

    GetPessoa(req:any, res:any)
    {
        res.send("Acessa uma pessoa específica");
    }

    PostPessoa(req:any, res:any)
    {
        res.send("Cria um registro de pessoa");
    }

    PatchPessoa(req:any, res:any)
    {
        res.send("Atualiza os dados de uma pessoa");
    }

    DeletePessoa(req:any, res:any)
    {
        res.send("Deleta o registro de uma pessoa");
    }

    DeletePessoas(req:any, res:any)
    {
        res.send("Deleta todos os registros de pessoas");
    }
}

export const pessoasController = new PessoasController();