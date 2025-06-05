import express, { json } from 'express'
import checkPendingMigrations from './config/checkPrismaMigrations.js'
import cors from 'cors'
import { router as usersRoutes } from './routes/usersRoutes.js'
const app = express()
const port = 8000

app.use( json() )
app.use( cors() )

const migrationsCheck = checkPendingMigrations()

app.use( '/users', usersRoutes )


app.listen( port, () => {
    console.log( "Running...🏃‍♂️🌪️" )
} )
