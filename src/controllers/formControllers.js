import { createForm, deleteFormById, getAllCompanyForms, getFormAnswersById, updateFormById } from '../services/formService'

export const createFormController = async ( req, res ) => {
    try {
        const form = await createForm( req.body )
        return res.sendStatus( 201 )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const deleteFormByIdController = async ( req, res ) => {
    try {
        await deleteFormById( req.params.id )
        return res.sendStatus( 200 )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const getAllCompanyFormsController = async ( req, res ) => {
    try {
        const companyForms = await getAllCompanyForms( req.params.companyId )
        return res.status( 200 ).json( companyForms )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const getFormAnswersByIdController = async ( req, res ) => {
    try {
        const companyForms = await getFormAnswersById( req.params.id )
        return res.status( 200 ).json( companyForms )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const updateFormByIdController = async ( req, res ) => {
    try {
        const form = await updateFormById( req.params.id, req.body )
        return res.status( 200 ).json( form )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
