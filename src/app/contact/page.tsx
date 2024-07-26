import Link from 'next/link'
import { Headings } from '../components/Headings'

export default function Contact() {
  return (
    <section className="px-4 lg:px-9 xl:pl-[105px] 2xl:mx-auto 2xl:max-w-[1440px] 2xl:px-0">
      <Headings title="Reach Out Me" subtitle="Contact" />
      <div className="relative flex flex-wrap gap-[3.125rem] lg:gap-20">
        <div className="grow space-y-[3.125rem] font-ibm lg:space-y-32 xl:w-[22.1875rem] xl:flex-initial">
          <div className="space-y-0 text-lg font-bold text-black lg:space-y-5 lg:text-3xl">
            <Link className="block" href="#">
              +55 31 98728-1657
            </Link>
            <Link className="block" href="#">
              anappaivaux@gmail.com
            </Link>
          </div>
          <div className="hidden space-x-6 font-medium uppercase text-purple lg:block">
            <Link href="#">Instagram</Link>
            <Link href="#">Linkedin</Link>
            <Link href="#">Behance</Link>
          </div>
        </div>
        <form className="grow space-y-14 rounded-lg bg-purple px-12 pb-14 pt-10 font-ibm">
          <span className="text-base font-bold text-white lg:text-3xl">
            Interested in working with me? <br />
            Drop me a message!
          </span>
          <div className="flex flex-wrap gap-11">
            <input
              className="h-8 flex-1 border-b border-white bg-transparent pb-2 font-medium text-white placeholder:uppercase placeholder:text-white"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-8 flex-1 border-b border-white bg-transparent pb-2 font-medium text-white placeholder:uppercase placeholder:text-white"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="space-y-4">
            <textarea
              className="block h-20 w-full flex-1 border-b border-white bg-transparent pb-2 font-medium text-white placeholder:uppercase placeholder:text-white"
              name=""
              id=""
              placeholder="Message"
            ></textarea>
          </div>
          <button
            className="rounded-md bg-blue px-10 py-4 text-lg font-medium text-white"
            type="submit"
          >
            Submit now
          </button>
        </form>
        <div className="w-full space-x-6 pb-[4.375rem] pt-5 text-center text-xs font-medium uppercase text-purple lg:hidden lg:text-base">
          <Link href="#">Instagram</Link>
          <Link href="#">Linkedin</Link>
          <Link href="#">Behance</Link>
        </div>
      </div>
    </section>
  )
}
