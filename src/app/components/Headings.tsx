interface HeadingsProps {
  title: string
  subtitle: string
}

export function Headings({ subtitle, title }: HeadingsProps) {
  return (
    <>
      <span className="mb-4 block font-ibm text-lg font-semibold italic text-blue">
        {subtitle}
      </span>
      <h1 className="mb-11 font-ibm text-5xl font-bold text-blue">{title}</h1>
    </>
  )
}
