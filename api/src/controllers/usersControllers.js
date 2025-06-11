import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
} from '#services/usersService.js'

const getAllUsersController = async ( req, res ) => {
    try {
        const users = await getAllUsers()
        return res.status( 200 ).json( { data: users } )
    } catch ( error ) {
        return res.status( 500 ).json( { error: error.message } )
    }
}

const getUserByIdController = async ( req, res ) => {
    try {
        const user = await getUserById( req.params.id )
        return res.status( 200 ).json( { data: user } )
    } catch ( error ) {
        return res.status( 500 ).json( { error: error.message } )
    }
}

const createUserController = async ( req, res ) => {
    try {
        await createUser( req.body )
        return res.sendStatus( 201 )
    } catch ( error ) {
        return res.status( 500 ).json( { error: error.message } )
    }
}

const updateUserByIdController = async ( req, res ) => {
    try {
        const user = await updateUserById( req.params.id, req.body )
        return res.status( 200 ).json( { data: user } )
    } catch ( error ) {
        return res.status( 500 ).json( { error: error.message } )
    }
}

const deleteUserByIdController = async ( req, res ) => {
    try {
        await deleteUserById( req.params.id )
        return res.sendStatus( 200 )
    } catch ( error ) {
        return res.status( 500 ).json( { error: error.message } )
    }
}

export {
    createUserController,
    deleteUserByIdController,
    updateUserByIdController,
    getAllUsersController,
    getUserByIdController,
}
