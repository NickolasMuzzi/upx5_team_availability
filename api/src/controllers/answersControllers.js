import * as answersServices from '#services/answersService.js'

export const createAnswerController = async ( req, res ) => {
    try {
        await answersServices.createAnswer( req.body )
        return res.sendStatus( 201 )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const getAnswerByIdController = async ( req, res ) => {
    try {
        const answer = await answersServices.getAnswerById( req.params.id )
        return res.status( 200 ).json( answer )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const deleteAnswerByIdController = async ( req, res ) => {
    try {
        await answersServices.deleteAnswerById( req.params.id )
        return res.status( 200 )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const getAllFormAnswersController = async ( req, res ) => {
    try {
        const formAnswers = await answersServices.getAllFormAnswers( req.params.formId )
        return res.status( 200 ).json( formAnswers )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
