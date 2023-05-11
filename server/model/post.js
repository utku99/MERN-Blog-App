import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        default: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    description:{
        type: String,
        required: true
    },
    ownerID:{
        type: String,
        required: true
    },

})

export default mongoose.model("post", postSchema)