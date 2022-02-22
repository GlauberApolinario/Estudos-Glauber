import {Request, Response} from 'express';
import moment from 'moment'
import insertTask from '../data/insertTask';


export default async function createTask(req:Request, res:Response)
{
    try {
        //Verificar se algum campo está em branco
        if (
            !req.body.title ||
            !req.body.description ||
            !req.body.limit_date||
            !req.body.creator_id
        ) {
            res.status(400).send({
                message: '"title", "description", "limit_date" e "creator_id" são obrigatórios!'
            })
            return
        }
        //Verificar se o prazo expirou ou data limite inferior a data atual
        const datedif: number = moment(req.body.limit_date, 'DD/MM/YYY').unix() - moment().unix()
        console.log(datedif)
        if(datedif <= 0){
            res.status(400).send({
                message: '"limit_date" deve ser uma data futura!'
            })
            return
        }
        
        const id: string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.limit_date, 'DD/MM/YYY').format('YYYY-MM-DD'),
            req.body.creator_id
        )
        res.status(200).send({
            message: "Tarefa criada!",
            id
        })

    }catch (error: any){
        res.status(400).send({
            message: error.message || error.sqlMessage
    })
}
}
