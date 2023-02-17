import prismaClient from "../../prisma/";

interface HaircutRequest{
    userId: string,
    name: string,
    price: number
}

class CreateHaircutService{
    async execute({userId, name, price} : HaircutRequest){

        if(!name || !price){
            throw new Error("Error");
        }

        const myHaircuts = await prismaClient.haircut.count({
            where:{
                userId: userId
            }
        })

        const user = await prismaClient.user.findFirst({
            where:
            {
                id: userId,
            },
            include:{
                subscription: true
            }
        });

        if (myHaircuts >= 3 && user?.subscription?.status !== 'active'){
            throw new Error("Not Authorized")
        }

        const haircut = await prismaClient.haircut.create({
            data:{
                userId: userId,
                name: name,
                price: price,
                status: true
            }
        })

        return haircut;
    }
}

export {CreateHaircutService}