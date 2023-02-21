import prismaClient from "../../prisma";

interface CountHaircutRequest{
    userId: string
}

class CountHaircutService{
    async execute({userId} : CountHaircutRequest){

        const countHaircuts = await prismaClient.haircut.count({
            where:{
                userId: userId
            }
        })

        return countHaircuts;
    }
}

export {CountHaircutService}