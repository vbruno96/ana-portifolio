import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { Headings } from '../components/Headings'

export default function Works() {
  return (
    <section className="px-4 pb-20 lg:pl-[3.125rem] xl:pl-[6.5625rem] 2xl:mx-auto 2xl:max-w-[1440px] 2xl:px-0">
      <Headings title="Recent Project" subtitle="Works" />
      <div className="mb-[4.125rem] grid grid-cols-1 gap-x-[1.75rem] gap-y-14 lg:mb-28 xl:grid-cols-2 2xl:place-items-center">
        <Link href="#" className="flex justify-center gap-7">
          <div className="lg:max-w-[12.5rem]">
            <span className="mb-4 inline-block font-ibm text-xs font-semibold italic text-black lg:text-lg">
              UX case study
            </span>
            <h2 className="mb-6 font-ibm font-bold text-black lg:text-4xl">
              Bally Website Research
            </h2>
            <PiArrowUpRightBold className="text-[1.875rem] text-black lg:text-[4rem]" />
          </div>
          <div className="h-[10.75rem] w-[12.8125rem] bg-purple lg:h-[15.5rem] lg:w-[19.6875rem]" />
        </Link>
        <Link href="#" className="flex justify-center gap-7">
          <div className="lg:max-w-[12.5rem]">
            <span className="mb-4 inline-block font-ibm text-xs font-semibold italic text-black lg:text-lg">
              UX case study
            </span>
            <h2 className="mb-6 font-ibm font-bold text-black lg:text-4xl">
              Bally Website Research
            </h2>
            <PiArrowUpRightBold className="text-[1.875rem] text-black lg:text-[4rem]" />
          </div>
          <div className="h-[10.75rem] w-[12.8125rem] bg-purple lg:h-[15.5rem] lg:w-[19.6875rem]" />
        </Link>
        <Link href="#" className="flex justify-center gap-7">
          <div className="lg:max-w-[12.5rem]">
            <span className="mb-4 inline-block font-ibm text-xs font-semibold italic text-black lg:text-lg">
              UX case study
            </span>
            <h2 className="mb-6 font-ibm font-bold text-black lg:text-4xl">
              Bally Website Research
            </h2>
            <PiArrowUpRightBold className="text-[1.875rem] text-black lg:text-[4rem]" />
          </div>
          <div className="h-[10.75rem] w-[12.8125rem] bg-purple lg:h-[15.5rem] lg:w-[19.6875rem]" />
        </Link>
        <Link href="#" className="flex justify-center gap-7">
          <div className="lg:max-w-[12.5rem]">
            <span className="mb-4 inline-block font-ibm text-xs font-semibold italic text-black lg:text-lg">
              UX case study
            </span>
            <h2 className="mb-6 font-ibm font-bold text-black lg:text-4xl">
              Bally Website Research
            </h2>
            <PiArrowUpRightBold className="text-[1.875rem] text-black lg:text-[4rem]" />
          </div>
          <div className="h-[10.75rem] w-[12.8125rem] bg-purple lg:h-[15.5rem] lg:w-[19.6875rem]" />
        </Link>
      </div>
      <button className="mx-auto block rounded-lg bg-blue px-5 py-2 text-sm text-white hover:bg-transparent hover:text-blue hover:ring-1 hover:ring-blue lg:px-10 lg:py-4 lg:text-lg">
        Load more
      </button>
    </section>
  )
}
