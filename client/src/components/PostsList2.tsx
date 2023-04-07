import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../util-funcs/index"

export function PostsList2() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  })

  if (isLoading) return <div>Loading...</div>

  if (isError) return <pre>Oh no, Error occured! {JSON.stringify(error)}</pre>

  return (
    <div>
      <h1 className="font-bold">Posts List 2</h1>
      <ol>
        {data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  )
}
