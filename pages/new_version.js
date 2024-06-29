import { useState, useEffect,useRef } from 'react'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import { Author } from '../components/Author'
import {Experience} from '../components/Experience'

import { useInView } from 'react-intersection-observer';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const navigation = [
  { name: 'Work', href: '/', current: true },
  { name: 'About', href: '/aboutus', current: false },
  {
    name:'projects',
    href:'/projects',
    current:false
  },
  { name: 'Contact', href: 'https://tally.so/r/3XeBR4', current: false },
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
              <a href="https://github.com/surya304" target='_blank' rel="noreferrer" className="icon_style text-2xl text-black-500 rounded-full p-2 transition-colors duration-200 w-10 ">
                <FaGithub className='cursor-pointer'/>
              </a>
              <a href="https://www.linkedin.com/in/surya185" target='_blank' rel="noreferrer" className="icon_style text-2xl text-black-500 rounded-full p-2 transition-colors duration-200 w-10">
                <FaLinkedin />
              </a>
              <a href="mailto:ksaisurya304@gmail.com" target='_blank' rel="noreferrer" className="icon_style text-2xl text-black-500 rounded-full p-2 transition-colors duration-200 w-10">
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

    

<div className={`relative isolate px-6 pt-14 lg:px-8 `} >
      <Author />
    </div>

    
    <div style={{'backgroundColor':'hsla(160, 52%, 71%, .1)'}}>
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-2 md:grid-cols-11 lg:grid-cols-11">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image className="h-10 grayscale hover:grayscale-0" src="/logos/html.svg" alt="HTML" width={100} height={100} />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image className="h-10 grayscale hover:grayscale-0" width={100} height={100} src="/logos/javascript.svg" alt="JavaScript" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image className="h-11 grayscale hover:grayscale-0" width={100} height={100} src="/logos/react.svg" alt="React" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image className="h-10 grayscale hover:grayscale-0" width={100} height={100} src="/logos/next.svg" alt="Next.js" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <Image className="h-10 grayscale hover:grayscale-0" width={100} height={100} src="/logos/nuxt.svg" alt="Nuxt.js" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <Image    
         className="h-10 grayscale hover:grayscale-0" width={100} height={100}
                  src="/logos/vue.svg"
                  alt="Vue Js"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <Image    
         className="h-10 grayscale hover:grayscale-0" width={100} height={100}
                  src="/logos/angular.svg"
                  alt="Angular"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <Image    
         className="h-10 grayscale hover:grayscale-0" width={100} height={100}
                  src="/logos/jquery.svg"
                  alt="jquery"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <Image    
         className="h-10 grayscale hover:grayscale-0" width={100} height={100}
                  src="/logos/css.svg"
                  alt="CSS"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <Image    
         className="h-12 grayscale hover:grayscale-0" width={100} height={100}
                  src="/logos/tailwind.svg"
                  alt="Tailwind CSS"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <Image    
         className="h-10 grayscale hover:grayscale-0" width={100} height={100}
                  src="/logos/bootstrap.svg"
                  alt="Bootstrap 5"
                />
              </div>
            </div>
          </div>
        </div>
    <div className={`relative isolate px-6  pb-14 lg:px-8 `} >
<Experience />

    </div>


    </div>
  )
}
