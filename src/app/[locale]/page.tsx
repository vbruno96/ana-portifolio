import Image from 'next/image'
import Link from 'next/link'

import { FaVoicemail } from 'react-icons/fa6'
import { BsEnvelope } from 'react-icons/bs'

import { useRichtext } from '@/hooks/useRichtext'

interface HomeData {
  story: {
    name: string
    content: {
      image: {
        id: string
        alt: string
        filename: string
      }
      title: {
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
      content: {
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
      btnContact: string
    }
    slug: string
  }
}

interface HomeProps {
  params: {
    locale: string
  }
}

export default async function Home({ params }: HomeProps) {
  const homeData: HomeData = await fetch(
    `${process.env.CMS_URL}/home?token=${process.env.CMS_TOKEN}&language=${params.locale}`,
  ).then((response) => response.json())

  return (
    <section className="mx-auto flex flex-wrap items-center justify-center gap-16 px-4 pt-[3.875rem] lg:pl-[3.125rem] lg:pr-[3.125rem] xl:flex-nowrap xl:gap-0 xl:pl-[7.5rem] 2xl:max-w-[1440px] 2xl:justify-between 2xl:px-0">
      <div className="flex-1 text-lg xl:flex-shrink xl:flex-grow-0 xl:basis-[36.1875rem]">
        <h1
          className="mb-11 font-ibm text-4xl text-blue sm:text-6xl"
          dangerouslySetInnerHTML={{
            __html: useRichtext(homeData.story.content.title),
          }}
        />
        <div
          className="mb-12 [&>*:first-child]:mb-7 [&>*:first-child]:font-semibold"
          dangerouslySetInnerHTML={{
            __html: useRichtext(homeData.story.content.content),
          }}
        />
        <Link
          href="/contact"
          className="transition-color block rounded-md bg-blue px-10 py-4 text-center text-white hover:bg-transparent hover:text-blue hover:ring-1 hover:ring-blue sm:inline"
        >
          {homeData.story.content.btnContact}
        </Link>
        <div className="mt-16 flex flex-wrap items-center gap-2.5 text-lg font-medium text-black sm:gap-12">
          <Link href="tel:55319987281657" className="flex items-center gap-3">
            <span className="flex h-8 w-8 rotate-45 items-center justify-center rounded-full bg-black bg-opacity-5 text-purple">
              <FaVoicemail />
            </span>
            +55 98728157
          </Link>
          <Link
            href="mailto:anappaivaux@gmail.com"
            className="flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-5 text-purple">
              <BsEnvelope />
            </span>
            anappaivaux@gmail.com
          </Link>
        </div>
      </div>
      <Image
        src={homeData.story.content.image.filename}
        alt={homeData.story.content.image.alt}
        width={529}
        height={601}
      />
    </section>
  )
}
