import express from 'express';
import { PessoasRouter } from './routes/pessoasRoutes';

const app = express();

app.use(express.json());
app.use("/", PessoasRouter);

app.get("/", function(req, res){
    res.send("Servidor de feedback de alunos");
})

app.listen(3000, function(){
    console.log("Servidor Funcionando Corretamente.");
    
});