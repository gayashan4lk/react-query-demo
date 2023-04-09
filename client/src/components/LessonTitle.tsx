type LessonTitleProps = {
  label: string
}
export function LessonTitle({ label }: LessonTitleProps) {
  return <h1 className="mx-8 mt-8 text-xl font-bold text-black">{label}</h1>
}
