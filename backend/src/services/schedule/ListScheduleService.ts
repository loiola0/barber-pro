import prismaClient from "../../prisma";

interface ListScheduleRequest{
    userId: string
}

class ListScheduleService{
    async execute({ userId } : ListScheduleRequest){

        const listSchedule = await prismaClient.service.findMany({
            where:{
                userId: userId
            },
            select:{
                id: true,
                customer: true,
                haircut: true
            }
        });

        return listSchedule;
    }
}

export {ListScheduleService}