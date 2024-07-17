'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { FiLink } from 'react-icons/fi'

interface InputFileProps {
  placeholder: string
}

export function InputFile({ placeholder }: InputFileProps) {
  const [files, setFiles] = useState([]) as FileList

  const inputFileRef = useRef<HTMLInputElement>(null)

  console.log(files !== null)

  function handleOpenAttachFile() {
    inputFileRef.current?.click()
  }

  function handleInputFileChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.files)
    if (event.target.files) {
      setFiles(event.target.files)
    }
  }

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-2 font-ibm uppercase text-white"
        onClick={handleOpenAttachFile}
      >
        <FiLink className="size-5" />
        {files?.length > 0 ? files?.item(0)?.name : placeholder}
      </button>
      <input
        className="hidden"
        type="file"
        name=""
        onChange={handleInputFileChange}
        ref={inputFileRef}
      />
    </>
  )
}
