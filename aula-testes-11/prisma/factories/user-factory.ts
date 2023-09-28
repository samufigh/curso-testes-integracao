import prisma from "../../src/database";


export async function createUser(email :string, password :string){
    return await prisma.user.create({
        data: {
            email,
            password
        }
    })
}