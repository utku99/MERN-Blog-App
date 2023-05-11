import postSchema from "../model/post.js"
import express from "express"

const router = express.Router()

router.get("/getposts", async (req, res) => {
    try {
        const posts = await postSchema.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})
router.get("/getpost/:id", async (req, res) => {
    try {
        const post = await postSchema.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})
router.post("/createpost", async (req, res) => {
    try {
        const createpost = await postSchema.create(req.body)
        res.status(200).json({ createpost })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})
router.put("/updatepost/:id", async (req, res) => {
    try {
        const updatedpost = await postSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedpost)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})
router.delete("/deletepost/:id", async (req, res) => {
    try {
        await postSchema.findByIdAndDelete(req.params.id)
        res.status(200).json({ msg: "post deleted " })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})



export default router