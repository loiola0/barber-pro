import prismaClient from "../../prisma";

interface CheckSubscription{
    userId: string
}

class CheckSubscriptionService{
    async execute({userId} : CheckSubscription){
        
        const status = await prismaClient.user.findFirst({
            where:{
                id: userId
            },
            select:{
                subscription:{
                select:{
                    id: true,
                    status: true
                    }
                }
            }
        });

        return status;
    }
}

export {CheckSubscriptionService}