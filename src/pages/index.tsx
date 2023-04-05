"use client"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <ul className="menu bg-base-100 w-56 p-2 rounded-box">
          <li>
            <Link href="lessons/absolute-basics">
              Lesson 1: Absolute Basics
            </Link>
          </li>
          <li>
            <Link href="lessons/mutation-basics">
              Lesson 2: Mutation Basics
            </Link>
          </li>
          <li>
            <Link href="lessons/how-query-key-works">
              Lesson 3: How Query Key Works
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
