import { Request, Response } from "express";
import {FinishScheduleService} from '../../services/schedule/FinishScheduleService';

class FinishScheduleController{
    async handle(req: Request, res: Response){

        const scheduleId = req.query.scheduleId as string;

        const userId = req.userId;
        
        const finishScheduleService = new FinishScheduleService();

        const result = await finishScheduleService.execute({scheduleId, userId});

        return res.json(result);
    }
}

export {FinishScheduleController}