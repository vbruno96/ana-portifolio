interface HeadingsProps {
  title: string
  subtitle: string
}

export function Headings({ subtitle, title }: HeadingsProps) {
  return (
    <div className="mb-8 space-y-2.5 lg:mb-[8.5rem] lg:space-y-4">
      <span className="inline-block font-ibm text-sm font-semibold italic text-blue lg:text-lg">
        {subtitle}
      </span>
      <h1 className="font-ibm text-3xl font-bold text-blue lg:text-5xl">
        {title}
      </h1>
    </div>
  )
}
