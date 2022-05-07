class FeedbacksController{
    constructor(){

    }

    GetFeedbacks(req:any, res:any)
    {
        res.send("Acessa a lista de feedbacks");
    }

    GetFeedback(req:any, res:any)
    {
        res.send("Acessa um feedback específico");
    }

    PostFeedback(req:any, res:any)
    {
        res.send("Cria um feedback de Setor");
    }

    PatchFeedback(req:any, res:any)
    {
        res.send("Atualiza os dados de um feedback");
    }

    DeleteFeedback(req:any, res:any)
    {
        res.send("Deleta o registro de um feedback");
    }

    DeleteFeedbacks(req:any, res:any)
    {
        res.send("Deleta todos os registros de feedbacks");
    }
}

export const feedbacksController = new FeedbacksController();