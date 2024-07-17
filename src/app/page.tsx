import Image from 'next/image'
import Link from 'next/link'

import { FaVoicemail } from 'react-icons/fa6'
import { BsEnvelope } from 'react-icons/bs'

import heroImg from './assets/hero-image.png'

export default function Home() {
  return (
    <section className="mx-auto flex items-center pl-[7.5rem] pr-[3.125rem] pt-[3.875rem] 2xl:max-w-[1440px] 2xl:justify-between 2xl:px-0">
      <div className="flex-shrink flex-grow-0 basis-[36.1875rem] text-lg">
        <h1 className="mb-11 font-ibm text-6xl text-blue">
          Hey, i’m Ana - A <strong className="font-bold">UI/UX Designer</strong>
        </h1>
        <div className="mb-12 [&>*:first-child]:mb-7 [&>*:first-child]:font-semibold">
          <p>Designing for impact, business, and users.</p>
          <p>
            UI/UX Design based in Brazil. I specialize in UX Design, Discovery
            process (design thinking, double diamond), and Visual Development.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-md bg-blue px-10 py-4 text-white transition-colors hover:bg-purple"
        >
          Let&apos;s talk with me
        </Link>
        <div className="mt-16 flex items-center gap-12 text-lg font-medium text-black">
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
      <Image src={heroImg} alt="Pessoa de braços cruzados sorindo" />
    </section>
  )
}
