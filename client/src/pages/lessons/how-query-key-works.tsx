import { MutationBasics } from "@/components/MutationBasics"
import { HowQueryKeyWorks } from "@/components/HowQueryKeyWorks"
import { LessonTitle } from "@/components/LessonTitle"

export default function Home() {
  return (
    <>
      <LessonTitle label="How Query Key Works" />
      <div className="m-8">
        <MutationBasics />
        <HowQueryKeyWorks />
      </div>
    </>
  )
}
