import express from 'express'
import {
    createUserController,
    getAllUsersController,
    getUserByIdController,
    deleteUserByIdController,
    updateUserByIdController
} from '../controllers/usersControllers.js'
const router = express.Router()

router.get( '/', getAllUsersController ) // getAll
router.get( '/:id', getUserByIdController ) // getUserById

router.post( '/', createUserController ) // createUser

router.patch( '/:id', updateUserByIdController ) // updateUser
router.delete( '/:id', deleteUserByIdController ) // deleteUser

export { router }
