import { Request, Response } from "express";
import PessoaModel from "../models/pessoasModel";
import PessoasService from "../services/pessoasServices";

export default class PessoasController
{
    private pessoaService: PessoasService;

    constructor()
    {
        this.pessoaService = new PessoasService();
    }

    public index = async (req: Request, res: Response) => {
        const pessoa = await this.pessoaService.index();
        res.send(pessoa).json();
    }

    public get = async (req: Request, res: Response) => {
        const { id } = req.params;

        const pessoa = await this.pessoaService.get(Number(id));
        res.send(pessoa).json();
    }

    public create = async (req: Request, res: Response) => {
        const pessoa = req.body as PessoaModel;
        
        const newpessoa = await this.pessoaService.create(pessoa);
        res.send(newpessoa).json();
    }

    public update = async (req: Request, res: Response) => {
        const pessoa = req.body as PessoaModel;
        const { id } = req.params;

        const newpessoa = this.pessoaService.Update(pessoa, Number(id));
        res.send(newpessoa);
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;

        const pessoa = this.pessoaService.delete(Number(id));
        res.send(pessoa);
    }
}