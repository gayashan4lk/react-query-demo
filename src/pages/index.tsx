import Link from "next/link"

const homeLinks = [
  {
    id: 0,
    href: "lessons/absolute-basics",
    label: "Lesson 1: Absolute Basics",
  },
  {
    id: 1,
    href: "lessons/mutation-basics",
    label: "Lesson 2: Mutation Basics",
  },
  {
    id: 2,
    href: "lessons/how-query-key-works",
    label: "Lesson 3: How Query Key Works",
  },
]

export default function Home() {
  return (
    <>
      <div className="md:flex">
        <ul className="mx-auto menu bg-gray-100 w-80 p-2 rounded-box">
          {homeLinks.map((link) => (
            <LessonLink key={link.id} url={link.href} label={link.label} />
          ))}
        </ul>
      </div>
    </>
  )
}
type LessonLinkProps = {
  url: string
  label: string
}

function LessonLink({ url, label }: LessonLinkProps) {
  return (
    <li>
      <Link href={url} className="text-base font-semibold">
        {label}
      </Link>
    </li>
  )
}
