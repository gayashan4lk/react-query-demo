// Absolute Basics of react-query
import { useQuery } from "@tanstack/react-query"
import { wait, posts } from "../utils"

export function HowQueryKeyWorks() {
  const postsQuery = useQuery({
    queryKey: ["myposts"],
    queryFn: () => wait(1000).then(() => [...posts]),
  })

  if (postsQuery.isLoading) return <div>Loading...</div>

  if (postsQuery.isError)
    return <pre>Oh no, Error occured! {JSON.stringify(postsQuery.error)}</pre>

  return (
    <div>
      {postsQuery.data.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}