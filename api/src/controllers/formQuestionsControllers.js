import * as formQuestionsServices from '#services/formQuestionsService.js'

export const createFormQuestionController = async ( req, res ) => {
    try {
        await formQuestionsServices.createFormQuestion( req.body )
        return res.sendStatus( 201 )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const deleteFormQuestionController = async ( req, res ) => {
    try {
        await formQuestionsServices.deleteFormQuestion( req.params.id )
        return res.sendStatus( 200 )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const getAllFormQuestionsController = async ( req, res ) => {
    try {
        const formQuestions = await formQuestionsServices.getAllFormQuestionsByFormId( req.params.formId )
        return res.sendStatus( 200 ).json( formQuestions )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
