interface RichtextData {
  type: string
  content: {
    type: string
    content: {
      text: string
      type: string
      marks?: {
        type: 'bold' | 'italic'
      }[]
    }[]
  }[]
}

export function useRichtext(data: RichtextData) {
  let textData = ''

  data.content.forEach((dataContent) => {
    dataContent.content.forEach((content) => {
      if (content.marks) {
        switch (content.marks[0].type) {
          case 'bold':
            textData += `<strong className="font-bold">${content.text}</strong>`
            break
          case 'italic':
            textData += `<span className="italic">${content.text}</span>`
            break
          default:
            textData += content.text
        }
      } else {
        textData += `<p>${content.text}</p>`
      }
    })
  })

  return textData
}
