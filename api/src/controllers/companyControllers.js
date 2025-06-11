import * as companySevice from './companyControllers.js'

export const createCompanyController = async ( req, res ) => {
    try {
        await companySevice.createCompanyController( req.body )
        return res.sendStatus( 201 )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}

export const updateCompanyByIdController = async ( req, res ) => {
    try {
        const company = await companySevice.updateCompanyById( req.params.id, req.body )
        return res.status( 200 ).json( company )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const getCompanyByIdController = async ( req, res ) => {
    try {
        const company = await companySevice.getCompanyById( req.params.id )
        return res.status( 200 ).json( company )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
export const deleteCompanyByIdController = async ( req, res ) => {
    try {
        await companySevice.deleteCompanyById( req.params.id )
        return res.sendStatus( 200 )
    } catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
