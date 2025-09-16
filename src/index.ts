import express from "express"
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env)

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        message: "hello there "
    })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})