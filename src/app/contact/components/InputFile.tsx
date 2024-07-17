'use client'

import { useRef } from 'react'
import { FiLink } from 'react-icons/fi'

interface InputFileProps {
  placeholder: string
}

export function InputFile({ placeholder }: InputFileProps) {
  /* const [files, setFiles] = useState<string>('') */

  const inputFileRef = useRef<HTMLInputElement>(null)

  function handleOpenAttachFile() {
    inputFileRef.current?.click()
  }

  /* function handleInputFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (
      event.currentTarget.files !== null &&
      event.currentTarget.files.item(0) !== null
    ) {
      setFiles(event.currentTarget.files[0].name)
    }
  } */

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-2 font-ibm uppercase text-white"
        onClick={handleOpenAttachFile}
      >
        <FiLink className="size-5" />
        {placeholder}
      </button>
      <input className="hidden" type="file" name="" ref={inputFileRef} />
    </>
  )
}
