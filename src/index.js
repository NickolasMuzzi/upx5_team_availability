import express, { json } from 'express'
import checkPendingMigrations from './config/checkPrismaMigrations.js'
import cors from 'cors'
import { router as usersRoutes } from './routes/usersRoutes.js'
import { router as workRegimeRoutes } from './routes/workRegimeRoutes.js'
import { router as questionsRoutes } from './routes/questionsRoutes'
import { router as formRoutes } from './routes/formRoutes'
import { router as companyRoutes } from './routes/companyRoutes'

const app = express()
const port = 8000

app.use( json() )
app.use( cors() )

const migrationsCheck = checkPendingMigrations()

app.use( '/users', usersRoutes )
app.use( '/work_regime', workRegimeRoutes )
app.use( '/form', formRoutes )
app.use( '/questions', questionsRoutes )
app.use( '/company', companyRoutes )


app.listen( port, () => {
    console.log( "Running...🏃‍♂️🌪️" )
} )
