// Query key (queryKey) should be qunique for each query
// Query Function (queryFn) is a function which returns a promise
// useQuery returns a query object which has so many properties including isLoading, isError, data, error

import { useQuery } from "@tanstack/react-query"
import { wait, posts } from "../util-funcs"

export function AbsoluteBasics() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...posts]),
  })

  // const postsQuery = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => Promise.reject("This is a bad error"),
  // }

  if (postsQuery.isLoading) return <>Loading...</>

  if (postsQuery.isError)
    return (
      <pre className="m-8">
        Oh no, Error occured! {JSON.stringify(postsQuery.error)}
      </pre>
    )

  return (
    <>
      {postsQuery.data.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  )
}
