import userSchema from "../model/user.js"
import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const router = express.Router()


router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await userSchema.findOne({ email })
        if (user) {
            res.status(500).json({ msg: "user already exists" })
        }
        const hashedPass = await bcrypt.hash(password, 12)

        const newUser = await userSchema.create({ name, email, password: hashedPass })

        res.status(200).json({ msg: "registered succesfully" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userSchema.findOne({ email })
        if (!user) {
            res.status(500).json({ msg: "can not find user" })
        }
       
        const comparePass = await bcrypt.compare(password, user.password)

        if (!comparePass) {
            res.status(500).json({ msg: "password is incorrect" })
        }

        const token = jwt.sign({ id: user._id }, "secret")

        res.status(200).json({
           token,
           user
        })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})


export default router