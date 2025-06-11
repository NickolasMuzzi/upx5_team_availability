import express from 'express'
import { getAllWorkRegimesController, getWorkRegimeByIdController } from '#controllers/workRegimeControllers.js'

const router = express.Router()

router.get( '/', getAllWorkRegimesController )
router.get( '/:id', getWorkRegimeByIdController )

export { router }
