import { Request, Response } from "express";
import {CountHaircutService} from '../../services/haircut/CountHaircutService';

class CountHaircutController{
    async handle(req: Request, res: Response){

        const {haircutId} = req.body;

        const userId = req.userId;

        const countHaircutService = new CountHaircutService();

        const countHaircuts = await countHaircutService.execute({userId});

        return res.json(countHaircuts);
    }
}

export {CountHaircutController}