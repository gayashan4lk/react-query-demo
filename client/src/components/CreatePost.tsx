import { useRef } from "react"
import { useMutation } from "@tanstack/react-query"
import { createPost } from "../util-funcs/index"

export function CreatePost() {
  const titleRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLInputElement>(null)

  const { mutate } = useMutation({
    mutationFn: createPost,
  })

  function handleSubmit(event: any): void {
    event.preventDefault()
    mutate({
      title: titleRef.current?.value as string,
      body: bodyRef.current?.value as string,
    })
  }

  return (
    <div>
      <h1>Create post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input id="body" type="text" ref={bodyRef} />
        </div>
        <button className="btn btn-sm">Create</button>
      </form>
    </div>
  )
}
