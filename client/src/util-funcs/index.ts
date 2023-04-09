export const posts = [
  { id: "1", title: "Hello Next.js" },
  { id: "2", title: "Next.js is awesome" },
]

export function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export async function getPosts() {
  const response = await fetch("http://localhost:3001/posts?_sort=title")
  const data = await response.json()
  return data
}

export async function getPost(id: string) {
  const response = await fetch(`http://localhost:3001/posts/${id}`)
  const data = await response.json()
  return data
}

export async function getUser(id: string) {
  const response = await fetch(`http://localhost:3001/users/${id}`)
  const data = await response.json()
  return data
}

export async function createPost({
  title,
  body,
}: {
  title: string
  body: string
}) {
  const postData = {
    title,
    body,
    userId: 1,
    id: Date.now(),
  }
  try {
    const response = await fetch(`http://localhost:3001/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
    const data = await response.json()
    return data
  } catch (error) {
    return new Error("Oh no, something went wrong!")
  }
}
