import prismaClient from "../../prisma";

interface UpdateHaircutRequest{
    userId: string,
    haircutId: string,
    name: string,
    price: number,
    status: boolean | string
}

class UpdateHaircutService{
    async execute({userId, haircutId, name, price, status = true}: UpdateHaircutRequest){
        
        const user = await prismaClient.user.findFirst({
            where:{
                id: userId,
            },
            include:{
                subscription: true
            }
        })

        if(user?.subscription?.status !== 'active'){
            throw new Error('Not Authorized');
        }

        const haircut = prismaClient.haircut.update({
            where:{
                id: haircutId
            },
            data:{
                name: name,
                price: price,
                status: status ? true : false
            }
        });

        return haircut;
    }
}

export {UpdateHaircutService}