import * as companyControllers from '#controllers/companyControllers.js'
import express from 'express'

const router = express.Router()

router.get( '/:id', companyControllers.getCompanyByIdController )
router.post( '/', companyControllers.createCompanyController )
router.patch( '/:id', companyControllers.updateCompanyByIdController )
router.delete( '/:id', companyControllers.deleteCompanyByIdController )

export { router }
