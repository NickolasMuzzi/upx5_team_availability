import { prisma } from '../config/prisma_config'

const formQuestionsRepo = prisma.form_questions

export const getAllFormQuestionsByFormId = ( formId ) => {
    return formQuestionsRepo.findMany( { where: { form_id: formId } } )
}
export const createFormQuestion = ( data ) => {
    return formQuestionsRepo.create( { ...data } )
}

export const deleteFormQuestion = ( formId, questionId ) => {
    return formQuestionsRepo.delete( { where: { form_id: formId, question_id: questionId } } )
}
