const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()

const PORT = 3500

app.use(express.json())
app.use('/users' , userRoutes)

app.get("/" , (request , response) => {
    response.send("API is running")
})

app.use((error , request , response , next) => {
    response.status(error.status).json({message: error.message})
})

app.listen(PORT , () => {
    console.log(`SERVER RUNNING @PORT: ${PORT}`);
    
})