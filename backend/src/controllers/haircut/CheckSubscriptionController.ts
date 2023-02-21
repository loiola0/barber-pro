import { Response, Request } from "express";
import {CheckSubscriptionService} from '../../services/haircut/CheckSubscriptionService';

class CheckSubscriptionController{
    async handle(req: Request, res: Response){
        
        const userId = req.userId;

        const checkSubscriptionService = new CheckSubscriptionService();
        
        const subscription = await checkSubscriptionService.execute({userId});

        return res.json(subscription);
    }
}

export {CheckSubscriptionController}