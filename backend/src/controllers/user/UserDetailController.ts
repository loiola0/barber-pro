import { Request, Response } from "express";
import { UserDetailService } from "../../services/user/UserDetailService";

class UserDetailController{
    async handle(req: Request, res: Response){

        const userId = req.userId;

        console.log(userId)

        const userDetailService = new UserDetailService();

        const detailUser = await userDetailService.execute()

        return res.json(detailUser);
    }   
}

export {UserDetailController}