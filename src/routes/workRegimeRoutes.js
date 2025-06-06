import express from 'express'
import { getAllWorkRegimesController, getWorkRegimeById } from '../controllers/workRegimeControllers'

const router = express.Router()

router.get( '/', getAllWorkRegimesController )
router.get( '/:id', getWorkRegimeById )

export { router }
