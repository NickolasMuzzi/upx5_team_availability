import express, { json } from 'express'
import checkPendingMigrations from './config/checkPrismaMigrations.js'
import cors from 'cors'
import { router as usersRoutes } from './routes/usersRoutes.js'
import { router as workRegimeRoutes } from './routes/workRegimeRoutes.js'
import { router as questionsRoutes } from './routes/questionsRoutes.js'
import { router as formRoutes } from './routes/formRoutes.js'
import { router as companyRoutes } from './routes/companyRoutes.js'
import { router as formQuestionsRoutes } from './routes/formQuestionsRoutes.js'
import { router as answersRoutes } from './routes/answersRoutes.js'

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
app.use( '/form_questions', formQuestionsRoutes )
app.use( '/answers', answersRoutes )


app.listen( port, () => {
    console.log( "Running...🏃‍♂️🌪️" )
} )
