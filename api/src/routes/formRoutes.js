import express from 'express'
import * as formControllers from '#controllers/formControllers.js'

const router = express.Router()

router.get( '/:companyId', formControllers.getAllCompanyFormsController )
router.post( '/', formControllers.createFormController )
router.delete( '/:id', formControllers.deleteFormByIdController )
router.get( '/answers/:id', formControllers.getFormAnswersByIdController )
router.patch( '/:id', formControllers.updateFormByIdController )

export { router }
