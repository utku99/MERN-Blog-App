import axios from "axios"
import { useEffect, useState } from "react"

const usePosts = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        const fetchposts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getposts")
                setPost(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchposts()
    }, [])

    return posts
}

export default usePosts