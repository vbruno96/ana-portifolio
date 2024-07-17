import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'

export default function Works() {
  return (
    <section className="pb-20 pl-[6.5625rem] 2xl:mx-auto 2xl:max-w-[1440px] 2xl:px-0">
      <span className="mb-4 inline-block font-ibm text-lg font-semibold italic text-blue">
        Works
      </span>
      <h1 className="mb-[8.5rem] font-ibm text-5xl font-bold text-blue">
        Recent Project
      </h1>
      <div className="mb-28 grid grid-cols-2 gap-x-[1.75rem] gap-y-14 2xl:place-items-center">
        <Link href="#" className="flex gap-7">
          <div className="max-w-[12.5rem]">
            <span className="mb-4 inline-block font-ibm text-lg font-semibold italic text-black">
              UX case study
            </span>
            <h2 className="mb-6 font-ibm text-4xl font-bold text-black">
              Bally Website Research
            </h2>
            <PiArrowUpRightBold className="text-[4rem] text-black" />
          </div>
          <div className="h-[15.5rem] w-[19.6875rem] bg-purple" />
        </Link>
        <Link href="#" className="flex gap-7">
          <div className="max-w-[12.5rem]">
            <span className="mb-4 inline-block font-ibm text-lg font-semibold italic text-black">
              UX case study
            </span>
            <h2 className="mb-6 font-ibm text-4xl font-bold text-black">
              Bally Website Research
            </h2>
            <PiArrowUpRightBold className="text-[4rem] text-black" />
          </div>
          <div className="h-[15.5rem] w-[19.6875rem] bg-purple" />
        </Link>
        <Link href="#" className="flex gap-7">
          <div className="max-w-[12.5rem]">
            <span className="mb-4 inline-block font-ibm text-lg font-semibold italic text-black">
              UX case study
            </span>
            <h2 className="mb-6 font-ibm text-4xl font-bold text-black">
              Bally Website Research
            </h2>
            <PiArrowUpRightBold className="text-[4rem] text-black" />
          </div>
          <div className="h-[15.5rem] w-[19.6875rem] bg-purple" />
        </Link>
        <Link href="#" className="flex gap-7">
          <div className="max-w-[12.5rem]">
            <span className="mb-4 inline-block font-ibm text-lg font-semibold italic text-black">
              UX case study
            </span>
            <h2 className="mb-6 font-ibm text-4xl font-bold text-black">
              Bally Website Research
            </h2>
            <PiArrowUpRightBold className="text-[4rem] text-black" />
          </div>
          <div className="h-[15.5rem] w-[19.6875rem] bg-purple" />
        </Link>
      </div>
      <button className="mx-auto block rounded-lg bg-blue px-10 py-4 text-lg text-white">
        Load more
      </button>
    </section>
  )
}
