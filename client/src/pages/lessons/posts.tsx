import { useState } from "react"
import { PostsList1 } from "@/components/PostsList1"
import { PostsList2 } from "@/components/PostsList2"
import { Post } from "@/components/Post"
import { CreatePost } from "@/components/CreatePost"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />)
  const [activeTab, setActiveTab] = useState(0)

  function handleOnclick(element: JSX.Element, index: number) {
    setCurrentPage(element)
    setActiveTab(index)
  }

  return (
    <>
      <div className="tabs tabs-boxed px-4">
        <button
          className={`tab ${activeTab === 0 && "tab-active"}`}
          onClick={() => handleOnclick(<PostsList1 />, 0)}
        >
          Posts List 1
        </button>
        <button
          className={`tab ${activeTab === 1 && "tab-active"}`}
          onClick={() => handleOnclick(<PostsList2 />, 1)}
        >
          Posts List 2
        </button>
        <button
          className={`tab ${activeTab === 2 && "tab-active"}`}
          onClick={() => handleOnclick(<Post id={1} />, 2)}
        >
          FirstPage
        </button>
        <button
          className={`tab ${activeTab === 3 && "tab-active"}`}
          onClick={() => handleOnclick(<CreatePost />, 3)}
        >
          New Post
        </button>
      </div>
      <br />
      <div className="mx-8">{currentPage}</div>
    </>
  )
}
