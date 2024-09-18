import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from './GridPattern'
import { SectionHeading } from './SectionHeading'
import authorImage from '../public/images/profile_pic.jpg'
import { useRouter } from 'next/router'



export function Author() {
  const stats = [
    { label: 'Developer Since', value: '2018' },
    { label: 'Companies', value: '3' },
    { label: 'Experience', value: '3+' },
    { label: 'Projects worked', value: '25+' },
  ];

  const router = useRouter()

  const handleRedirect = () => {
    router.push('/aboutus')
  }

  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >

      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]"

      >
        <GridPattern x="50%" y="100%" />
      </div>



      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-custom-back pt-px sm-rounded-6xl lg-rounded-8xl"

        >
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover box-shadow-2xl"
              src={authorImage}
              alt="Profile Picture"
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">

            <SectionHeading number="0" id="author-title">
              About Me
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Hey
              there, I’m a <span className="block text-blue-600"> Front End Developer </span>  Who Loves building Stuff.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              My passion for design and crafting beautiful user interfaces led me into the world of coding. I began my journey at a startup, initially focusing on developing websites and web applications as a UI developer. Over time, I transitioned to become a front-end developer and eventually a junior full-stack developer.

              Working within the same team for four years has been an incredible experience. Together, we ve embarked on the creation of three distinct startups, each venture adding its own unique chapter to our collective journey. The collaborative spirit and creative synergy within the team have made this journey truly remarkable.
            </p>


            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-black pt-6">
                    <dt className="text-base font-medium text-blue-500">{stat.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-8">


              <button
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
                onClick={handleRedirect}>
                Read More
              </button>

            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-55rem)] -z-10 blur-3xl transform-gpu overflow-hidden sm:top-[calc(100%-50rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
