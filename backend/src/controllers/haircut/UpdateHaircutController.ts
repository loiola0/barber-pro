import { Response, Request } from "express";
import {UpdateHaircutService} from '../../services/haircut/UpdateHaircutService';

class UpdateHaircutController{
    async handle(req: Request, res: Response){

        const {haircutId ,name, price, status} = req.body;

        const userId = req.userId;

        const updateHaircutService = new UpdateHaircutService();

        const haircut = await updateHaircutService.execute({
            userId,
            haircutId,
            name,
            price,
            status
        });

        return res.json(haircut);
    }
}

export {UpdateHaircutController}