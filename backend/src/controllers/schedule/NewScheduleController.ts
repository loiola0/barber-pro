import { Request, Response } from "express";
import {NewScheduleService} from '../../services/schedule/NewScheduleService';

class NewScheduleController{
    async handle(req: Request, res: Response){

        const {haircutId, customer} = req.body;

        const userId = req.userId;

        const newScheduleService = new NewScheduleService();

        const schedule = await newScheduleService.execute({userId, haircutId, customer});

        return res.json(schedule);
    }
}

export {NewScheduleController}