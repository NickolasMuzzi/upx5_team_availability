import { createQuestion, deleteQuestionById, getQuestionById, updateQuestionById } from '#services/questionsSevice.js'

export const createQuestionController = async ( req, res ) => {
    try {
        const question = await createQuestion( req.body )
        return res.sendStatus( 201 )
    }
    catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}


export const getQuestionByIdController = async ( req, res ) => {
    try {
        const question = await getQuestionById( req.params.id )
        return res.status( 200 ).json( question )
    }
    catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}

export const updateQuestionByIdController = async ( req, res ) => {
    try {
        const question = await updateQuestionById( req.params.id, req.body )
        return res.status( 200 ).json( question )
    }
    catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const deleteQuestionByIdController = async ( req, res ) => {
    try {
        const question = await deleteQuestionById( req.params.id )
        return res.sendStatus( 200 )
    }
    catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
