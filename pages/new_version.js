import { useState, useEffect,useRef } from 'react'
import Image from 'next/image'


import Navigation from '../components/Navigation'
import { Author } from '../components/Author'
import {Experience} from '../components/Experience'

import { useInView } from 'react-intersection-observer';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const navigation = [
  { name: 'Work', href: '/new_version', current: true },
  { name: 'About', href: '/aboutus', current: false },
  { name: 'Contact', href: '#', current: false },
]
const stats = [
  { label: 'Developer Since', value: '2018' },
  { label: 'Companies', value: '3' },
  { label: 'Experience', value: '3+' },
  { label: 'Projects worked', value: '25+' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [loaded, setLoaded] = useState(false);



  useEffect(() => {
    setLoaded(true);


  }, []);




  return (
    <div className="bg-custom">
      <Navigation navigation={navigation} />


      <div className="relative isolate px-6 pt-14 lg:px-8" >

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00CC99] to-[#9089fc] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >

        </div>
        <div className="mx-auto max-w-6xl py-10 ">

          <div className="text-center">
            {/* <h1 className="text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl relative" > */}
            <h1 className={`text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl ${loaded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000`}>

              Hi. I am Sai Surya.
              <span className='absolute right-4 top-[-50px]'>

                <Image  src='/images/star.png' className="h-10 w-10 mt-5 mx-auto sm:h-20 sm:w-20" alt='start' width={100} height={100} />


              </span>




            </h1>



            <h1 className=
              {`relative mt-5 text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl ${loaded ? 'translate-y-5' : 'translate-y-full'} transition-transform duration-1000`}
            >

              A Front End Developer.
              <span className='absolute left-0 bottom-[-80px]'>

                <Image  src='/images/star.png' className="h-10 w-10 mt-5 mx-auto sm:h-20 sm:w-20" alt='start' width={100} height={100} />


              </span>


            </h1>
            <p className={` mt-20 text-lg leading-8 custom-text-color font-semibold ${loaded ? 'translate-y-5' : 'translate-y-full'} transition-transform duration-1000 `}>
            I Really Love Bringing Designs to Life with Code .
            </p>


            <div className="flex justify-center space-x-4 mt-10">
              <a href="https://github.com/surya304" target='_blank' rel="noreferrer" className="icon-style text-2xl text-black-500 rounded-full p-2 transition-colors duration-200 w-10 ">
                <FaGithub className='cursor-pointer'/>
              </a>
              <a href="https://www.linkedin.com/in/surya304" target='_blank' rel="noreferrer" className="icon-style text-2xl text-black-500 rounded-full p-2 transition-colors duration-200 w-10">
                <FaLinkedin />
              </a>
              <a href="mailto:ksaisurya304@gmail.com" target='_blank' rel="noreferrer" className="icon-style text-2xl text-black-500 rounded-full p-2 transition-colors duration-200 w-10">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00CC99] to-[#9089fc] opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>


      {/* <div className="relative bg-slate-50 sm:py-16 py-2">
          <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
          <div className="mx-auto max-w-full bg-slate-50 lg:bg-transparent lg:px-8 py-4 sm:py-0">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16 hidden sm:block">
                <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <image 
                      className="rounded-3xl object-cover object-center "
                      src="/images/profile1.jpg"
                      alt="About Me"
                    />
                  </div>
                </div>
              </div>

              <div className="relative bg-slate-50 lg:col-span-10 lg:col-start-4 lg:row-start-1 lg:grid lg:grid-cols-12 lg:items-center lg:rounded-3xl">
              
                <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-5xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:p-0">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl" id="join-heading">
                    About Me
                  </h2>
                  <p className="text-lg leading-7 ">
                    I am a Front End Developer located in Brantford ,Ontario Canada.<br />
                    In 2018, after My Degree With Computer Science and Love for Design I started working in a Startup Developing websites and Web APplicatons
                    From a UI Developer To a Front End Developer That Was a Truly Amazing Journey.
                  </p>
                  <p className="text-lg leading-7">
                    In 2018, I Have Expertice in Developing web applications using technologies like <b>HTML5, CSS3, JavaScript, jQuery, Vue.js, Nuxt, Angular, Next.js, React, Bootstrap, Tailwind CSS, Node.js, MongoDB, Webflow, Wordpress, and Amazon Web Services (AWS).</b>
                  </p>
                
                  <div className="mt-10">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                      {stats.map((stat) => (
                        <div key={stat.label} className="border-t-2 border-orange-600 pt-6">
                          <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                          <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

<div className={`relative isolate px-6 pt-14 lg:px-8 `} >
      <Author />
    </div>

    

    <div className={`relative isolate px-6 pt-14 pb-14 lg:px-8 `} >
<Experience />

    </div>


    </div>
  )
}
