import express from 'express'
import { createQuestionController, deleteQuestionByIdController, getQuestionByIdController, updateQuestionByIdController } from '#controllers/questionsController.js'

const router = express.Router()


router.get( '/:id', getQuestionByIdController )
router.post( '/', createQuestionController )
router.delete( '/:id', deleteQuestionByIdController )
router.patch( '/:id', updateQuestionByIdController )

export { router }
