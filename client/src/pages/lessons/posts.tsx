import { useState } from "react"
import { PostsList1 } from "@/components/PostsList1"
import { PostsList2 } from "@/components/PostsList2"
import { Post } from "@/components/Post"
import { CreatePost } from "@/components/CreatePost"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />)
  return (
    <>
      <button className="btn" onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button className="btn" onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <button className="btn" onClick={() => setCurrentPage(<Post id="1" />)}>
        FirstPage
      </button>
      <button className="btn" onClick={() => setCurrentPage(<CreatePost />)}>
        New Post
      </button>
      <br />
      {currentPage}
    </>
  )
}
