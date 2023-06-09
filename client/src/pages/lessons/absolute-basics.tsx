import { AbsoluteBasics } from "@/components/AbsoluteBasics"
import { LessonTitle } from "../../components/LessonTitle"

export default function Home() {
  return (
    <>
      <LessonTitle label="Absolute Basics" />
      <div className="m-8">
        <AbsoluteBasics />
      </div>
    </>
  )
}
