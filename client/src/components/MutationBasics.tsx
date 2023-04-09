// mutations are typically used to create/update/delete data or perform server side-effects.

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { wait, posts } from "../util-funcs"

export function MutationBasics() {
  const queryClient = useQueryClient()

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...posts]),
  })

  const postsMutation = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() => posts.push({ id: crypto.randomUUID(), title })),
    onSuccess: () => queryClient.invalidateQueries(["posts"]),
  })

  if (postsQuery.isLoading) return <>Loading...</>

  if (postsQuery.isError)
    return <pre>Oh no, Error occured! {JSON.stringify(postsQuery.error)}</pre>

  return (
    <>
      {postsQuery.data.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        className="btn btn-sm my-4"
        disabled={postsMutation.isLoading}
        onClick={() => postsMutation.mutate("My fake post")}
      >
        Add New Post
      </button>
    </>
  )
}
