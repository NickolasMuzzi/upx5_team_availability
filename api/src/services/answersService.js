import { prisma } from '../config/prisma_config.js'

const answerRepo = prisma.answers
export const createAnswer = ( answerData ) => {
    return answerRepo.create( { ...answerData } )
}
export const getAllFormAnswers = ( formId ) => {
    return answerRepo.findMany( { where: { form_id: formId } } )
}

export const getAnswerById = ( answerId ) => {
    return answerRepo.findFirstOrThrow( { where: { id: answerId } } )
}

export const deleteAnswerById = ( answerId ) => {
    return answerRepo.delete( { where: { id: answerId } } )
}
