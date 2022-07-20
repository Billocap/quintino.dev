interface NamedContentProps {
  name: string,
  children: any
}

export default function NamedContent({ name, children }: NamedContentProps) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-h4 sm:text-h3 font-bold">
        {name}
      </p>

      {children}
    </div>
  )
}
