import { prisma } from '../config/prisma_config.js'

export const getQuestionById = ( questionId ) => {
    return prisma.questions.findUniqueOrThrow( { where: { id: questionId } } )
}

export const createQuestion = ( questionData ) => {
    return prisma.questions.create( ...questionData )
}

export const updateQuestionById = ( questionId, questionData ) => {
    return prisma.questions.update( { where: { id: questionId }, data: { ...questionData } } )
}

export const deleteQuestionById = ( questionId ) => {
    return prisma.questions.delete( { where: { id: questionId } } )
}
