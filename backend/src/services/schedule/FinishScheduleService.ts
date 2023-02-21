import prismaClient from "../../prisma";

interface FinishScheduleRequest{
    userId: string,
    scheduleId: string,
}

class FinishScheduleService{
    async execute({scheduleId, userId} : FinishScheduleRequest){
        
        if(scheduleId === '' || userId === ''){
            throw new Error('Error')
        }

        try {

            const belongToUser = await prismaClient.service.findFirst({
                where:{
                    id: scheduleId,
                    userId: userId,
                }
            })

            if (belongToUser === null){
                throw new Error('Not authorized');
            }

            await prismaClient.service.delete({
                where:{
                    id: scheduleId
                }
            });

            return {message: 'Completed successfully'}

        } catch (error) {
            throw new error;
        }
    }
}

export {FinishScheduleService}