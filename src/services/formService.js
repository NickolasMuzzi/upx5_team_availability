import { prisma } from '../config/prisma_config'

const formsRepo = prisma.form

export const getAllCompanyForms = ( companyId ) => {
    return formsRepo.findMany( { where: { company_id: companyId } } )
}
export const createForm = ( formData ) => {
    return formsRepo.create( ...formData )
}

export const updateFormById = ( formId, formData ) => {
    return formsRepo.update( { where: { id: formId }, data: { ...formData } } )
}

export const deleteFormById = ( formId ) => {
    return formsRepo.delete( { where: { id: formId } } )
}

export const getFormAnswersById = ( formId ) => {
    return formsRepo.findMany( { where: { answers: { some: { form_id: formId } } } } )
}
