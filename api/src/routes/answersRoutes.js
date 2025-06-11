import * as answersControllers from '#controllers/answersControllers.js'
import express from 'express'

const router = express.Router()

router.get( '/:id', answersControllers.getAnswerByIdController )
router.get( '/forms/:formId', answersControllers.getAllFormAnswersController )
router.post( '/', answersControllers.createAnswerController )
router.delete( '/:id', answersControllers.deleteAnswerByIdController )

export { router }
