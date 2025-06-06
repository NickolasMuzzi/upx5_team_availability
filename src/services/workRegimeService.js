import { prisma } from '../config/prisma_config.js'

export const getAllWorkRegimes = () => {
    return prisma.work_regime.findMany()
}

export const getWorkRegimeById = ( workRegimeId ) => {
    return prisma.work_regime.findUniqueOrThrow( { where: { id: workRegimeId } } )
}

