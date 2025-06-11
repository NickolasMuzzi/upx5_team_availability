import * as formQuestionsControllers from '#controllers/formQuestionsControllers.js'
import express from 'express'

const router = express.Router()

router.get( '/form/:formId', formQuestionsControllers.getAllFormQuestionsController )
router.post( '/', formQuestionsControllers.createFormQuestionController )
router.delete( '/:id', formQuestionsControllers.deleteFormQuestionController )

export { router }
