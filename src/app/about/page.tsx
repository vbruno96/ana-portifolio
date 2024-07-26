import Image from 'next/image'
import Link from 'next/link'

import { BsEnvelope, BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import { FaVoicemail } from 'react-icons/fa6'
import { TbUserSquare } from 'react-icons/tb'
import { LiaMapMarkerSolid } from 'react-icons/lia'

import aboutImage from '../assets/about-image.png'
import { Headings } from '../components/Headings'

export default function About() {
  return (
    <>
      <section className="2xl:px-auto flex flex-wrap gap-14 px-4 pb-32 lg:px-[3.125rem] xl:flex-nowrap xl:pl-[7.5rem] 2xl:mx-auto 2xl:max-w-[1440px] 2xl:justify-between 2xl:px-0">
        <div className="w-full flex-shrink-0 font-ibm xl:w-auto">
          <Headings title="About Me" subtitle="Nice to meet you!" />
          <Image
            src={aboutImage}
            alt="Pessoa sorrindo acenando"
            className="mx-auto mb-8"
          />
          <h3 className="mb-3 text-center text-3xl font-bold text-blue lg:text-5xl">
            Ana Paula Paiva
          </h3>
          <p className="mb-4 text-center text-base font-medium text-[#212121] lg:text-lg">
            UI/UX Designer
          </p>
          <Link
            className="flex items-center justify-center gap-2 text-base font-medium underline lg:text-lg"
            href="/"
          >
            Donwload CV{' '}
            <BsFillArrowUpRightSquareFill className="text-base lg:text-[1.5rem]" />
          </Link>
        </div>
        <div className="xl:pt-[7.625rem]">
          <div className="mb-9 grid grid-cols-1 gap-x-7 gap-y-6 border-b border-b-black pb-8 text-lg lg:grid-cols-2 lg:grid-rows-2">
            <Link href="tel:55319987281657" className="flex items-center gap-3">
              <span className="flex h-10 w-10 rotate-45 items-center justify-center rounded-full bg-black bg-opacity-5 font-medium text-purple">
                <FaVoicemail className="text-base lg:text-[1.25rem]" />
              </span>
              +55 31 98728157
            </Link>
            <p className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-5 font-medium text-purple">
                <TbUserSquare className="text-base lg:text-[1.25rem]" />
              </span>
              24 yrs
            </p>
            <Link
              href="mailto:anappaivaux@gmail.com"
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-5 font-medium text-purple">
                <BsEnvelope className="text-base lg:text-[1.25rem]" />
              </span>
              anappaivaux@outlook.com
            </Link>
            <p className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-5 font-medium text-purple">
                <LiaMapMarkerSolid className="text-base lg:text-[1.25rem]" />
              </span>
              Minas Gerais, Brazil
            </p>
          </div>
          <h2 className="mb-2 font-ibm text-xl font-bold text-blue">
            About me
          </h2>
          <div className="text-sm text-[#212121] lg:text-lg [&>*:not(:last-child)]:mb-3">
            <p>
              Hello! I&apos;m a UX/UI designer passionate about creating
              incredible experiences! With{' '}
              <strong>4+ years of experience</strong> in the design world, I
              currently live in Brazil, where I am also studying Analysis and
              Systems Development.
            </p>

            <p>
              My journey has led me to collaborate with various technology
              companies, and now I find myself immersed in challenges and
              learning experiences at a software company specializing in
              property management, with promising startups linked to the group.
            </p>

            <p>
              I strive to balance user needs with business objectives throughout
              the entire process. Currently, I have the privilege of{' '}
              <strong>leading a dynamic UX/UI Design team</strong>.
            </p>

            <p>
              Skills: Discovery research, User interviews, usability testing,
              prototyping, developing metrics to scale a product, handoff
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F7FA]">
        <div className="px-4 pb-[3.375rem] pt-[2.875rem] lg:px-[3.125rem] xl:pl-[7.5rem] 2xl:mx-auto 2xl:max-w-[1440px] 2xl:px-0">
          <span className="mb-8 hidden font-ibm text-base font-bold text-[#5A5A5A] lg:block">
            Experience
          </span>
          <h2 className="mb-5 font-ibm text-xl font-bold text-blue lg:text-5xl">
            My Experience
          </h2>
          <p className="mb-[3.125rem] text-sm text-[#535353] lg:text-lg">
            My main focus is to explore the universe of UX/UI Design, crafting
            exceptional experiences and enhancing the accessibility of
            applications for diverse user profiles.
          </p>
          <div className="flex flex-wrap gap-14 xl:flex-nowrap">
            <div className="w-full rounded-[20px] border border-[#EFE8F5] bg-white py-6 pl-5 pr-12 text-sm xl:w-auto xl:flex-1">
              <h3 className="mb-2 text-lg font-bold text-[#000]">
                Group Software
              </h3>
              <span className="mb-5 block text-base text-[#535353]">
                UX/UI Designer PL - 2023 / Currently
              </span>
              <p>
                Responsible for the company&apos;s UX/UI team and supporting the
                professional development of the team (4 people).
              </p>
              <p>
                Working on product improvement for both mobile and desktop,
                conducting end-to-end Continuous Discovery processes, UI design,
                metrics, usability testing, interviews, flow and process
                documentation, product validation, and handoff.
              </p>
              <div className="my-4 border-b border-b-[#F2F2F2]" />
              <span className="mb-5 block text-base text-[#535353]">
                UX/UI Designer JR - 2022 / 2023
              </span>
              <p>
                Execution of Product Discovery (Design thinking, Lean Inception,
                and Double Diamond) and product evolution.
              </p>
              <p>
                Interface design: Prototyping of low, medium, and high-fidelity
                interfaces. User testing and process documentation.
              </p>
            </div>
            <div className="w-full rounded-[20px] border border-[#EFE8F5] bg-white py-6 pl-5 pr-12 text-sm xl:w-auto xl:flex-1">
              <h3 className="mb-2 text-lg font-bold text-[#000]">BHS</h3>
              <span className="mb-5 block text-base text-[#535353]">
                Power Platform - UX/UI Consultant Jr - 2020 / 2022
              </span>
              <p>
                Performing kickoff, conducting Discovery processes, documenting
                flows, UI design, developing applications in Power App and sites
                in SharePoint
              </p>
              <div className="my-4 border-b border-b-[#F2F2F2]" />
              <span className="mb-5 block text-base text-[#535353]">
                Power Platform - UX/UI Intern - 2020
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 pt-11 lg:px-[3.125rem] xl:pl-[7.5rem] 2xl:mx-auto 2xl:max-w-[1440px] 2xl:px-0">
        <div className="flex flex-wrap justify-between rounded-[20px] bg-[#F6F4EC] px-4 pb-12 pt-8 xl:px-0 2xl:justify-evenly">
          <div className="w-full xl:w-auto xl:pl-14">
            <h4 className="mb-5 text-lg font-bold text-[#000]">Skills</h4>
            <div className="text-sm xl:w-80 xl:text-base">
              <p>Discovery research</p>
              <p>Prioritization - MVP</p>
              <p>Persona and jorney mapping</p>
              <p>Continuos Discovery</p>
              <p>User interviews</p>
              <p>Knowledge of UX methodologies</p>
              <p>UI Desing (Low, Medium and High FFidelity)</p>
              <p>Usability test</p>
              <p>Workshop Conducting</p>
              <p>HTML, CSS e JavaScript</p>
              <p>Design Sprint</p>
              <p>Design Thinking</p>
            </div>
          </div>
          <div className="my-[1.875rem] h-px w-full bg-[#DCD3B7] xl:hidden" />
          <div className="relative w-full before:absolute before:block before:border-[#DCD3B7] after:border-[#DCD3B7] xl:w-auto xl:pl-14 xl:before:-left-8 xl:before:bottom-0 xl:before:top-0 xl:before:mt-auto xl:before:h-80 xl:before:border-l xl:after:absolute xl:after:bottom-0 xl:after:right-8 xl:after:top-0 xl:after:mt-auto xl:after:block xl:after:h-80 xl:after:border-l">
            <h4 className="mb-5 text-lg font-bold text-[#000]">Tools</h4>
            <div className="text-sm xl:w-80 xl:text-base">
              <p>Figma</p>
              <p>Sketch</p>
              <p>Maze Design</p>
              <p>Marvel</p>
              <p>Invision</p>
              <p>Usability Hub</p>
              <p>Hotjar</p>
              <p>UX Pin</p>
              <p>Adobe XD</p>
              <p>Power Apps</p>
              <p>SharePoint</p>
            </div>
          </div>
          <div className="my-[1.875rem] h-px w-full bg-[#DCD3B7] xl:hidden" />
          <div className="w-full xl:w-auto">
            <h4 className="mb-5 text-lg font-bold text-[#000]">Languages</h4>
            <div className="text-sm xl:w-80 xl:text-base">
              <p>Portuguese - Native</p>
              <p>English - Advanced C1</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
