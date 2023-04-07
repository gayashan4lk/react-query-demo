type LessonTitleProps = {
  label: string
}
export function LessonTitle({ label }: LessonTitleProps) {
  return <h1 className="text-xl font-bold text-black">{label}</h1>
}
