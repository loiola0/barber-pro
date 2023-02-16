import prismaClient from "../../prisma";

class UserDetailService{
    async execute(userId: string){
        
        const user = await prismaClient.user.findFirst({
            where:{
                id: userId
            },
            select:{
                id: true,
                email: true,
                name: true,
                address: true,
                subscription: {
                    select:{
                        id: true,
                        priceId: true,
                        status: true
                    }
                }
            }
        })

        return user;
    }
}

export {UserDetailService};