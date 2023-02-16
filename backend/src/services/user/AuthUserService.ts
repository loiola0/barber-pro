import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { response } from 'express'

interface AuthUserRequest{
    email: string,
    password: string
}

class AuthUserService{
    async execute({email, password} : AuthUserRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            },
            include:{
                subscription: true
            }
        })

        if(!user){
            throw new Error('Email/password incorrect');
        }

        const passwordMath = await compare(password, user?.password);

        if(!passwordMath){
            throw new Error('Email/password incorrect');
        }

        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: 60
            }
        ) 
            
        return ({
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            token: token,
            subscriptions: user?.subscription ?
                {
                    id: user?.subscription.id,
                    status: user?.subscription.status 
                } : null

        });
    }
}

export {AuthUserService};