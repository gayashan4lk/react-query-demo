"use client"
import { Welcome } from "../components/Welcome"
import { useQuery, useMutation } from "@tanstack/react-query"

const posts = [
  { id: 1, title: "Hello Next.js" },
  { id: 2, title: "Next.js is awesome" },
]

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export default function Home() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...posts]),
  })

  // const postsQuery = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => Promise.reject("This is a bad error"),
  // })

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
