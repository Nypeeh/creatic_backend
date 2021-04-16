import 'reflect-metadata'

import express from 'express'
import cors from 'cors'
import routes from './routes'
import './database'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`😊 Server started on port ${process.env.PORT}!`)
})
