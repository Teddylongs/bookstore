import express  from "express"
import dotenv from 'dotenv'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'
const app = express()


dotenv.config()

connectDB()

app.get('/',(req, res) => {
    res.send('Api is tunning!')
})


app.use('/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold))