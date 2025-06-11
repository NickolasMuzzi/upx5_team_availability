import { getAllWorkRegimes, getWorkRegimeById } from '#services/workRegimeService.js'

export const getAllWorkRegimesController = async ( req, res ) => {
    try {
        const work_regimes = await getAllWorkRegimes()
        return res.status( 200 ).json( work_regimes )
    }
    catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}

export const getWorkRegimeByIdController = async ( req, res ) => {
    try {
        const work_regime = await getWorkRegimeById( req.params.id )
        return res.status( 200 ).json( work_regime )
    }
    catch ( error ) {
        return res.status( 500 ).json( { message: error } )
    }
}
