import { useEffect, useState, Fragment } from 'react'
import { Popover } from '@headlessui/react'
import Link from 'next/link'


import { Transition, Dialog } from '@headlessui/react'
import { Tab } from '@headlessui/react'

import { XMarkIcon, PhoneIcon  } from '@heroicons/react/24/outline'
import Image from 'next/image'

import Head from 'next/head'


import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
  // https://unpkg.com/browse/@heroicons/vue@2.0.13/24/outline/

const stats = [
  { label: 'Developer Since', value: '2016' },
  { label: 'Companies', value: '4' },
  { label: 'Experience', value: '6+' },
  { label: 'Projects worked', value: '25+' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')
  const [openContact, setOpenContact] = useState(false)

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])
  return (

    <>
      <Head>
        <title>Webflow Developer</title>
        <link rel="shortcut icon" href="/images/dp_1.png" />
        <meta
          name="description"
          content="I can help you convert your Figma sketch design or existing websites into Webflow project"
        />
      </Head>

      <header className="relative z-20 pb-11 lg:pt-11">
      <Popover className="z-50 w-full bg-white shadow-lg fixed top-0">
          <div className="mx-auto max-w-full px-4 sm:px-6">
            <div className="flex items-center justify-between py-2 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
                  {/* <img
                    className="h-10 w-full sm:h-14 rounded-full"
                    src="/images/logo.png"
                    alt=""
                  /> */}
                  <h1 className="text-3xl font-bold tracking-tight sm:text-3xl flex items-center space-x-3">
                    <span className="block text-slate-600 bg-orange-100 rounded-2xl px-2 sm:px-5 py-1 sm:py-2 xl:inline font-pacifico">J</span>
                  </h1>
                </Link>
              </div>
              <div className="items-center justify-end md:flex md:flex-1 lg:w-0 md:space-x-8">
                {/* <Link href="/linkedin" className="cursor-pointer font-medium text-gray-500 hover:text-gray-900 hover:underline hover:text-orange-600">
                  LinkedIn
                </Link> */}
                <a
                  onClick={() => setOpenContact(true)}
                  className="cursor-pointer ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-600 px-4 py-2 text-base font-medium text-slate-100"
                >
                   <PhoneIcon className='mr-2 h-5 w-5 text-slate-100' /><span className='hidden sm:block'></span> Book a Call
                </a>
              </div>
            </div>
          </div>
       </Popover>
    </header>

      <div className="relative bg-gray-50 h-screen">


    <main className="lg:relative bg-white h-full mt-4 sm:mt-10 circles_h_80">
      <div className="mx-auto w-full max-w-full pt-20 pb-20 text-center lg:py-48 lg:text-left mt-2 sm:mt-10">
        <div className="px-4 sm:px-16 md:px-18 lg:px-20 xl:px-24">
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl flex items-center space-x-3">
            <span className="block xl:inline">Webflow Developer </span>
            <img className="w-14 h-14 p-2 rounded-lg bg-indigo-100 shadow-xl" src="/logos/webflow.svg" alt="Webflow"  />
            {/* <span className="block text-white bg-orange-600 rounded-2xl px-2 sm:px-6 py-1 sm:py-3 xl:inline font-pacifico"></span> */}
          </h1>
          <p className="text-left mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-2xl">
          I am  Jeevan Kumar, I am specialized in making websites using <b>Webflow</b>
          </p>
          <div className="mt-10 sm:flex flex sm:justify-start justify-center sm:space-x-6 space-x-2">
            <div className="">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeevankumarkaree/" className="flex rounded-md  sm:w-full items-center justify-center rounded-md border border-transparent bg-[#007bb5] px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-5'><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
              </a>
            </div>
            <div className="">
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/JeevanKaree"
                className="flex rounded-md  sm:w-full items-center justify-center rounded-md border border-transparent bg-[#55ACEE] px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5'><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
              </a>
            </div>
            <div className="">
              <a target="_blank" rel="noopener noreferrer"
                href="https://codepen.io/jeevankaree/pens/popular"
                className="flex rounded-md  sm:w-full items-center justify-center rounded-md border border-transparent bg-slate-700 px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
              >
                <svg viewBox="0 0 138 26" fill="none" className='w-20 h-5' stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" title="CodePen"><path d="M15 8a7 7 0 100 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0l11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 010 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 000-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path></svg>
              </a>
            </div>
            <div className="">
              <a target="_blank" rel="noopener noreferrer"
                href="https://github.com/jeevankaree220"
                className="flex rounded-md sm:w-full items-center justify-center rounded-md border border-transparent bg-slate-700 px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='w-5 h-5'>
                    <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
              </a>
            </div>
          </div>


        </div>
      </div>
      <div className="relative h-96 flex items-center w-full sm:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 ">
        <img className=" w-full object-cover sm:mt-32 mt-8" src="/images/dp_11.png" alt="Webflow Developer"  />
      </div>
    </main>

    <div className="relative bg-slate-50 sm:py-16 py-2">
      <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
      <div className="mx-auto max-w-full bg-slate-50 lg:bg-transparent lg:px-8 py-4 sm:py-0">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16 hidden sm:block">
            <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="rounded-3xl object-cover object-center shadow-2xl"
                  src="/images/k.jpg"
                  alt="About me"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-slate-50 lg:col-span-10 lg:col-start-4 lg:row-start-1 lg:grid lg:grid-cols-12 lg:items-center lg:rounded-3xl">
            <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
              <svg
                className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-slate-300" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg
                className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-slate-300" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-5xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:p-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl" id="join-heading">
              Who I am I? 🍺
              </h2>
              <p className="text-lg leading-7 ">
                I am a Web Application Developer located in India.<br/>
                In 2012, after more than three years with a recruiting agency, I left my job at age 26 to focus on learning Frontend development.
              </p>
              <p className="text-lg leading-7">
                In 2016, I began working as a frontend developer for a startup and have since expanded my expertise to include the development of web applications using technologies like <b>HTML5, CSS3, JavaScript, jQuery, Vue.js, Nuxt, Angular, Next.js, React, Bootstrap, Tailwind CSS, Node.js, MongoDB, <b className='bg-yellow-400 p-0.5 rounded-md'>Webflow,</b> Wordpress, ghost.org, and Amazon Web Services (AWS).</b>
              </p>
              <p className="text-lg leading-7">
                I am a person who is always prepared for whatever may come my way. I enjoy the outdoors, especially when it involves a motor cycle trip, and I am a skilled badminton player.
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
    </div>

     <div className="bg-slate-100">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block m-2">Looking for a Webflow Developer?</span>
          <span className="block m-2">Let&apos;s Talk 😀</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">

             <a
                  onClick={() => setOpenContact(true)}
                  className="w-80 cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-600 px-8 py-6 text-base font-medium text-slate-100"
                >
                   <PhoneIcon className='mr-2 h-8 w-8 text-slate-100' /><span className='hidden sm:block text-md sm:text-3xl'> Book a Call</span>
                </a>
          </div>

        </div>
      </div>
    </div>
    <Footer />
</div>




<Transition.Root show={openContact} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={setOpenContact}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full sm:items-end items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full sm:mt-0 mt-10 relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-2 sm:w-full sm:max-w-4xl sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    onClick={() => setOpenContact(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebbYdFHg7ZT0_ZY3IqAqU1FWkP0_QL7NMptyOxWQTIO2wkYg/viewform?embedded=true" width="800" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                <div className="contactContainer">
                  <iframe src="https://forms.gle/GhGxsqC7Q7gQuQaP6" className="contactForm">Loading…</iframe>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>


    </>



  )
}
