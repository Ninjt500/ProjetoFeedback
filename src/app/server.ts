import express from 'express';
import { PessoasRouter } from './routes/pessoasRoutes';
import { SetoresRouter } from './routes/setoresRoutes';

const app = express();

app.use(express.json());
app.use("/", PessoasRouter);
app.use("/", SetoresRouter);

app.get("/", function(req, res){
    res.send("Servidor de feedback de alunos");
})

app.listen(3000, function(){
    console.log("Servidor Funcionando Corretamente.");
    
});