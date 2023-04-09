import axios from "axios"
import { Post } from "../types"

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
})

export async function getPosts() {
  const { data }: { data: Post[] } = await axiosInstance.get("/posts", {
    params: {
      _sort: "title",
    },
  })
  return data
}
