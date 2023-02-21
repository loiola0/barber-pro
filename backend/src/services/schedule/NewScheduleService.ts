import prismaClient from "../../prisma";

interface NewScheduleRequest{
    userId: string,
    haircutId: string,
    customer: string
}

class NewScheduleService{
    async execute({userId, haircutId, customer} : NewScheduleRequest){

        if(customer === '' || haircutId === ''){
            throw new Error('Error schedule new service');
        }

        const schedule = await prismaClient.service.create({
            data:{
                haircutId: haircutId,
                userId: userId,
                customer: customer
            }
        })

        return schedule;
    }
}

export {NewScheduleService}