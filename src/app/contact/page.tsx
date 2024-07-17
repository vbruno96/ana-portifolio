import Link from 'next/link'
import { Headings } from '../components/Headings'
import { InputFile } from './components/InputFile'

export default function Contact() {
  return (
    <section className="pl-[105px] pr-9 2xl:mx-auto 2xl:max-w-[1440px] 2xl:px-0">
      <Headings title="Reach Out Me" subtitle="Contact" />
      <div className="flex flex-wrap gap-20">
        <div className="w-[22.1875rem] space-y-32 font-ibm">
          <div className="space-y-5 text-3xl font-bold text-black">
            <Link className="block" href="#">
              +55 31 98728-1657
            </Link>
            <Link className="block" href="#">
              anappaivaux@gmail.com
            </Link>
          </div>
          <div className="space-x-6 font-medium uppercase text-purple">
            <Link href="#">Instagram</Link>
            <Link href="#">Linkedin</Link>
            <Link href="#">Behance</Link>
          </div>
        </div>
        <form className="flex-1 space-y-14 rounded-lg bg-purple px-12 pb-14 pt-10 font-ibm">
          <span className="text-3xl font-bold text-white">
            Interested in working with me? <br />
            Drop me a message!
          </span>
          <div className="flex flex-wrap gap-11">
            <input
              className="bg-transparent h-8 flex-1 border-b border-white pb-2 font-medium text-white placeholder:uppercase placeholder:text-white"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-transparent h-8 flex-1 border-b border-white pb-2 font-medium text-white placeholder:uppercase placeholder:text-white"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="space-y-4">
            <textarea
              className="bg-transparent block h-20 w-full flex-1 border-b border-white pb-2 font-medium text-white placeholder:uppercase placeholder:text-white"
              name=""
              id=""
              placeholder="Message"
            ></textarea>
            <InputFile placeholder="Attach File" />
          </div>
          <button
            className="rounded-md bg-blue px-10 py-4 text-lg font-medium text-white"
            type="submit"
          >
            Submit now
          </button>
        </form>
      </div>
    </section>
  )
}
