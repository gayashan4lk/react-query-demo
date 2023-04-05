export const posts = [
  { id: "1", title: "Hello Next.js" },
  { id: "2", title: "Next.js is awesome" },
]

export function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}
