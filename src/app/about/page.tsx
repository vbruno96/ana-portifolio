import Image from 'next/image'
import Link from 'next/link'

import { BsEnvelope, BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import { FaVoicemail } from 'react-icons/fa6'
import { TbUserSquare } from 'react-icons/tb'
import { LiaMapMarkerSolid } from 'react-icons/lia'

import aboutImage from '../assets/about-image.png'

export default function About() {
  return (
    <>
      <section className="2xl:px-auto flex gap-14 pb-32 pl-[7.5rem] pr-[3.125rem] 2xl:mx-auto 2xl:max-w-[calc(1440px-9.6875rem)] 2xl:justify-between 2xl:px-0">
        <div className="flex-shrink-0 font-ibm">
          <span className="mb-4 block text-lg font-semibold italic text-blue">
            Nice to meet you!
          </span>
          <h1 className="mb-11 text-5xl font-bold text-blue">About</h1>
          <Image
            src={aboutImage}
            alt="Pessoa sorrindo acenando"
            className="mx-auto mb-8"
          />
          <h3 className="mb-3 text-center text-5xl font-bold text-blue">
            Ana Paula Paiva
          </h3>
          <p className="mb-4 text-center text-lg font-medium text-[#212121]">
            UI/UX Designer
          </p>
          <Link
            className="flex items-center justify-center gap-2 text-lg font-medium underline"
            href="/"
          >
            Donwload CV{' '}
            <BsFillArrowUpRightSquareFill className="text-[1.5rem]" />
          </Link>
        </div>
        <div className="pt-[7.625rem]">
          <div className="mb-9 grid grid-cols-2 grid-rows-2 gap-x-7 gap-y-6 border-b border-b-black pb-8 text-lg">
            <Link href="tel:55319987281657" className="flex items-center gap-3">
              <span className="flex h-10 w-10 rotate-45 items-center justify-center rounded-full bg-black bg-opacity-5 font-medium text-purple">
                <FaVoicemail className="text-[1.25rem]" />
              </span>
              +55 31 98728157
            </Link>
            <p className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-5 font-medium text-purple">
                <TbUserSquare className="text-[1.25rem]" />
              </span>
              24 yrs
            </p>
            <Link
              href="mailto:anappaivaux@gmail.com"
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-5 font-medium text-purple">
                <BsEnvelope className="text-[1.25rem]" />
              </span>
              anappaivaux@outlook.com
            </Link>
            <p className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-5 font-medium text-purple">
                <LiaMapMarkerSolid className="text-[1.25rem]" />
              </span>
              Minas Gerais, Brazil
            </p>
          </div>
          <h2 className="mb-2 font-ibm text-xl font-bold text-blue">
            About me
          </h2>
          <div className="text-lg text-[#212121] [&>*:not(:last-child)]:mb-3">
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
        <div className="pb-[3.375rem] pl-[7.5rem] pr-[3.125rem] pt-[2.875rem] 2xl:mx-auto 2xl:max-w-[calc(1440px-9.6875rem)] 2xl:px-0">
          <span className="mb-8 block font-ibm text-base font-bold text-[#5A5A5A]">
            Experience
          </span>
          <h2 className="mb-5 font-ibm text-5xl font-bold text-blue">
            My Experience
          </h2>
          <p className="mb-[3.125rem] text-lg text-[#535353]">
            My main focus is to explore the universe of UX/UI Design, crafting
            exceptional experiences and enhancing the accessibility of
            applications for diverse user profiles.
          </p>
          <div className="flex gap-14">
            <div className="flex-1 rounded-[20px] border border-[#EFE8F5] bg-white py-6 pl-5 pr-12 text-sm">
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
            <div className="flex-1 rounded-[20px] border border-[#EFE8F5] bg-white py-6 pl-5 pr-12 text-sm">
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
      <section className="pb-16 pl-[7.5rem] pr-[3.125rem] pt-11 2xl:mx-auto 2xl:max-w-[calc(1440px-9.6875rem)] 2xl:px-0">
        <div className="flex justify-between rounded-[20px] bg-[#F6F4EC] pb-12 pt-8 2xl:justify-evenly">
          <div className="pl-14">
            <h4 className="mb-5 text-lg font-bold text-[#000]">Skills</h4>
            <div className="w-80">
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
          <div className="relative pl-14 before:absolute before:-left-8 before:bottom-0 before:top-0 before:mt-auto before:block before:h-80 before:border-l before:border-[#DCD3B7] after:absolute after:bottom-0 after:right-8 after:top-0 after:mt-auto after:block after:h-80 after:border-l after:border-[#DCD3B7]">
            <h4 className="mb-5 text-lg font-bold text-[#000]">Tools</h4>
            <div className="w-80">
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
          <div>
            <h4 className="mb-5 text-lg font-bold text-[#000]">Languages</h4>
            <div className="w-80">
              <p>Portuguese - Native</p>
              <p>English - Advanced C1</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
