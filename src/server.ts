import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import vipsRoute from './routes/vips.route'
import loginRoute from './routes/login.route'
import { initializeDummyData } from './utilities/initializeDummyData'
import { synchronizeModel } from './utilities/synchronizeModel'
import { requireAuth } from './middleware/auth'
import { db } from './config/database'
import { PORT } from './config/constants'

const app: Application = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.authenticate()
  .then(async () => {
    console.log('Database connection has been established successfully.')
    await synchronizeModel()
    await initializeDummyData()
  })
  .catch((err) => console.error('Unable to connect to the database:', err))

app.use('/api/login', loginRoute())
app.use('/api/vips', requireAuth, vipsRoute())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
