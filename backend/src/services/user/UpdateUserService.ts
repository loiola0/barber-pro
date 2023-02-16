import prismaClient from "../../prisma";

interface UserRequest{
    userId: string,
    name: string,
    address: string
}

class UpdateUserService{
    async execute({userId, name, address}: UserRequest){
        try{
            const userAlreadyExists = await prismaClient.user.findFirst({
                where:{
                    id: userId
                }
            })

            if(!userAlreadyExists){
                throw new Error('User not exists!');
            }

            const userUpdate = await prismaClient.user.update({
                where:{
                    id: userId
                },
                data:{
                    name,
                    address
                },
                select:{
                    name: true,
                    email: true,
                    address: true
                }
            })

            return userUpdate;
        }
        catch(err){
            console.log('caiu aqui')
            throw new Error('Error an update the user!');
        }
    }
}

export {UpdateUserService}