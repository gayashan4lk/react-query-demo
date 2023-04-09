import axios from "axios"
import { IPost, IUser, IPostViewModel } from "@/types"

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
})

export async function getPosts(): Promise<IPost[]> {
  const { data }: { data: IPost[] } = await axiosInstance.get("/posts", {
    params: {
      _sort: "title",
    },
  })
  return data
}

export async function getPost(id: number | undefined): Promise<IPost> {
  if (!id) throw new Error("No id provided")
  const { data }: { data: IPost } = await axiosInstance.get(`/posts/${id}`)
  return data
}

export async function getUser(id: number | undefined): Promise<IUser> {
  if (!id) throw new Error("No id provided")
  const { data }: { data: IUser } = await axiosInstance.get(`/users/${id}`)
  return data
}

export async function createPost(post: IPostViewModel): Promise<IPost> {
  const postData = {
    ...post,
    userId: 1,
    id: Date.now(),
  }
  const { data }: { data: IPost } = await axiosInstance.post("/posts", postData)
  return data
}
