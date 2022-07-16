import axios from 'axios'

export const fetchPosts=()=>axios.get("https://jsonplaceholder.typicode.com/posts")
