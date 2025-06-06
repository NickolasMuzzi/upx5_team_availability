import { prisma } from '../config/prisma_config'

const companyRepo = prisma.company

export const createCompany = ( companyData ) => {
    return companyRepo.create( { ...companyData } )
}

export const getAllCompanies = () => {
    return companyRepo.findMany()
}

export const getCompanyById = ( companyId ) => {
    return companyRepo.findUniqueOrThrow( { where: { id: companyId } } )
}

export const deleteCompanyById = ( companyId ) => {
    return companyRepo.delete( { where: { id: companyId } } )
}

export const updateCompanyById = ( companyId, companyData ) => {
    return companyRepo.update( { where: { id: companyId }, data: { ...companyData } } )
}
