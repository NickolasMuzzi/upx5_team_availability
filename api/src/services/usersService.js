import { prisma } from '../config/prisma_config.js'

export const getAllUsers = async () => {
    return prisma.users.findMany()
}
export const getUserById = async ( userId ) => {
    return prisma.users.findUniqueOrThrow( {
        where: {
            id: userId
        }
    } )
}
export const createUser = async ( userData ) => {
    return prisma.users.create( { data: { ...userData } } )
}
export const updateUserById = async ( userId, userData ) => {
    return prisma.users.update( { where: { id: userId }, data: { ...userData } } )
}

export const deleteUserById = async ( userId ) => {
    return prisma.users.delete( { where: { id: userId } } )
}
