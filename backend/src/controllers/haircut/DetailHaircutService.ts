import { Request, Response } from "express";
import {DetailHaircutService} from '../../services/haircut/DetailHaircutService';

class DetailHaircutController{
    async handle(req: Request, res: Response){

        const haircutId = req.query.haircutId as string;

        const userId = req.userId;

        const detailHaircutService = new DetailHaircutService();

        const haircut = await detailHaircutService.execute({haircutId, userId});

        return res.json(haircut);
    }
}

export {DetailHaircutController}