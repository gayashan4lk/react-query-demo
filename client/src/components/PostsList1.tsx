import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../util-funcs/api-functions"
import { IPost } from "@/types"

export function PostsList1() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchInterval: 5 * 60 * 1000,
  })

  if (isLoading) return <>Loading...</>

  if (isError) return <pre>Oh no, Error occured! {JSON.stringify(error)}</pre>

  return (
    <div>
      <h1 className="font-bold mb-4">Posts List 1</h1>
      <ol>
        {data.map((post: IPost) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  )
}
