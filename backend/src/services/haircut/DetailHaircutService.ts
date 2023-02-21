import prismaClient from "../../prisma";

interface DetailHaircutRequest{
    haircutId: string,
    userId: string
}

class DetailHaircutService{
    async execute({haircutId, userId} : DetailHaircutRequest){

        const haircut = await prismaClient.haircut.findFirst({
            where:{
                id: haircutId,
                userId: userId
            }
        })

        return haircut;
    }
}

export {DetailHaircutService}