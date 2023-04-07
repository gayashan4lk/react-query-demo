import Link from "next/link"
import { homeLinks } from "../data/homeLinks"

export default function Home() {
  return (
    <>
      <div className="md:flex">
        <ul className="mx-auto menu w-80 p-2 rounded-box">
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
