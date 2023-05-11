import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

import db from "./database/db.js"
import userRouter from "./router/user.js"
import postRouter from "./router/post.js"

const app = express()
dotenv.config()
app.use(cors())
app.use(bodyParser.json())



app.use("/", userRouter)
app.use("/", postRouter)



db()

const PORT = process.env.SERVER_PORT || 5001

app.listen(PORT, () => {
    console.log("server running on port ", PORT);
})