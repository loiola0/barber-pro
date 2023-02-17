import { Response, Request } from "express";
import  {CreateHaircutService}  from "../../services/haircut/CreateHaircutService";

class CreateHaircutController{
    async handle(req: Request, res: Response){

        const {name, price} = req.body;

        const userId = req.userId;

        const createHaircutService = new CreateHaircutService();

        const haircut = await createHaircutService.execute({userId, name, price});

        return res.json(haircut);
    }
}

export {CreateHaircutController}


