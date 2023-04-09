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
      <h1 className="font-bold mb-4">Create post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="title">
            <span className="label-text">Title</span>
          </label>
          <input
            id="title"
            className="input input-bordered w-full max-w-xs mb-4"
            type="text"
            ref={titleRef}
          />
          <label htmlFor="body">
            <span className="label-text">Body</span>
          </label>
          <input
            id="body"
            className="input input-bordered w-full max-w-xs mb-4"
            type="text"
            ref={bodyRef}
          />
        </div>
        <button className="btn btn-sm my-4">Create</button>
      </form>
    </div>
  )
}
