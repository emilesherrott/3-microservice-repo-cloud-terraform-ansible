const express = require('express')
const cors = require('cors')

const { logger } = require('./middleware/logger')
const { ceramicsRouter } = require('./routers/ceramics')
const { salesRouter } = require('./routers/sales')
const { userRouter } = require('./routers/users')

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)

app.use('/ceramics', ceramicsRouter)
app.use('/sales', salesRouter)
app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Welcome to the Ceramics API a place for potters and purchasers to create and shop.",
        "author": "Emile Sherrott"
    })
})

module.exports = {
    app
}