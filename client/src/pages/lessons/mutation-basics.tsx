import { LessonTitle } from "@/components/LessonTitle"
import { MutationBasics } from "@/components/MutationBasics"

export default function Home() {
  return (
    <>
      <LessonTitle label="Mutation Basics" />
      <div className="m-8">
        <MutationBasics />
      </div>
    </>
  )
}
