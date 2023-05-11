import mongoose from "mongoose";


const db = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected");
    } catch (error) {
        console.log("database failed", error);
    }
}

export default db