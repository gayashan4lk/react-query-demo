import { useState } from "react"
import { PostsList1 } from "@/components/PostsList1"
import { PostsList2 } from "@/components/PostsList2"

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
      <br />
      {currentPage}
    </>
  )
}
