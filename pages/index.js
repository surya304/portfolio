import { useEffect, useState, Fragment } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'


import { Transition, Dialog } from '@headlessui/react'
import { Tab } from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import Head from 'next/head'


import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
// https://unpkg.com/browse/@heroicons/vue@2.0.13/24/outline/

const sponsors = [
  { name: 'Transistor', logo: "/logos/html.svg" },
  { name: 'Tuple', logo: "/logos/css.svg" },
  { name: 'StaticKit', logo: "/logos/jquery.svg" },
  { name: 'Mirage', logo: "/logos/tailwind.svg" },
  { name: 'Laravel', logo: "/logos/angular.svg" },
  { name: 'Statamic', logo: "/logos/vue.svg" },
]
const features = [
  {
    name: 'GreyMetrics',
    description: 'Very good experience on using this',
    url: "/logos/html.svg",
  },
  {
    name: 'Aquo Digital',
    description: 'Very good experience on using this',
    url: "/logos/css.svg",
  },
  {
    name: 'Amaze Heaters',
    description: 'Very good experience on using this',
    url: "/logos/javascript.svg",
  },
  {
    name: 'Mapminds',
    description: 'Very good experience on using this',
    url: "/logos/react.svg",
  },
  {
    name: 'VideoForm',
    description: 'Very good experience on using this',
    url: "/logos/next.svg",
  },
  {
    name: 'Dubai Driving Center',
    description: 'Very good experience on using this',
    url: "/logos/vue.svg",
  },
  {
    name: 'Vijaya Diagnostic Center',
    description: 'Very good experience on using this',
    url: "/logos/angular.svg",
  },
  {
    name: 'Sites60',
    description: 'Very good experience on using this',
    url: "/logos/bootstrap.svg",
  },
  {
    name: 'QR Cafe',
    description: 'Very good experience on using this',
    url: "/logos/tailwind.svg",
  },
]

const posts = [

  {
    title: 'QR Cafe Web Application',
    description: 'Marketing Reports & Dashboards Software for Digital Agencies',
    href: 'https://qrcafe.com/',
    website: 'qrcafe.com',
    category: { name: 'Next.js, React, Node.js, Tailwind CSS, HTML, CSS, JavaScript, MongoDB', href: '#' },
    imageUrl:
      '/logos/dummy.png',

  },
  {
    title: 'GreyMetrics Website',
    description: 'Marketing Reports & Dashboards Software for Digital Agencies',
    href: 'https://greymetrics.com/',
    website: 'greymetrics.com',
    category: { name: 'HTML, CSS, & JavaScript', href: '#' },
    imageUrl:
      '/images/grey.png',

  },
  {
    title: 'VideoForm Website',
    description: 'Create and send personalized content to customers & increase conversions',

    href: '#',
    website: 'videoform.com',

    category: { name: 'Webflow, JavaScript, HTML, CSS', href: '#' },
    imageUrl:
      'https://uploads-ssl.webflow.com/5ec37983dca6c9066060ac84/629f344f3214b2c1abae2af5_dark-logo-vf.svg',

  },
  {
    title: 'Rockwoods International School',
    description: 'Use industry standard report templates to create reports/dashboards',

    href: 'https://www.rockwoodsinternationalschool.com/',
    website: 'rockwoodsinternationalschool.com',

    category: { name: 'Bootstrap4, JavaScript', href: '#' },
    // category: { name: 'Angular & Node.js', href: '#' },
    imageUrl:
      'https://www.rockwoodsinternationalschool.com/uploads/logo.png',

  },
  {
    title: 'Onus Hospitals',
    description: 'Create your own website from our drag and drop templates',

    href: 'https://onushospitals.com/',
    website: 'onushospitals.com',

    category: { name: 'Bootstrap4, HTML, CSS, JavaScript', href: '#' },
    imageUrl:
      'https://onushospitals.com/uploads/logo.png',

  },

  {
    title: 'Dubai Driving Center',
    description: 'Showcase your product in the best light with interactive demos',

    href: 'https://www.dubaidrivingcenter.net',
    website: 'dubaidrivingcenter.net',

    category: { name: 'HTML, CSS, Bootstrap, JavaScript', href: '#' },
    imageUrl:
      'https://www.dubaidrivingcenter.net/images/footer_logo.png',

  },
  {
    title: 'Amaze Heaters',
    description: 'Showcase your product in the best light with interactive demos',

    href: 'https://www.amazeheaters.com',
    website: 'amazeheaters.com',

    category: { name: 'Wordpress, CSS, HTML', href: '#' },
    imageUrl:
      'https://www.amazeheaters.com/wp-content/uploads/2016/09/image-1.png',

  },
  {
    title: 'ZereSouq',
    description: 'Showcase your product in the best light with interactive demos',

    href: 'https://zeresouq.com/',
    website: 'zeresouq.com',

    category: { name: 'Shopify, CSS, HTML', href: '#' },
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0549/0730/6073/files/Black_logo_-_no_background_2060bdf3-1295-44e4-a3c5-6fd5520d5e88_470x.png?v=1670672949',

  },
  {
    title: 'Mapminds',
    description: 'Showcase your product in the best light with interactive demos',

    href: 'https://mapminds.com/',
    website: 'mapminds.com',

    category: { name: 'Shopify, CSS, HTML', href: '#' },
    imageUrl:
      '/logos/mapminds.jpg',

  },
  {
    title: 'UnoBot',
    description: 'Showcase your product in the best light with interactive demos',

    href: 'https://mapminds.com/',
    website: 'mapminds.com',

    category: { name: 'Bootstrap4, HTML, CSS, Node.js', href: '#' },
    imageUrl:
      '/logos/dummy.png',

  },
  // {
  //   title: 'TribeVote',
  //   description: 'Showcase your product in the best light with interactive demos',

  //   href: 'https://mapminds.com/',
  //   website : 'mapminds.com',

  //   category: { name: 'Node.js, Bootstrap 4, JavaScript', href: '#' },
  //   imageUrl:
  //   '/logos/dummy.png',

  // },
  {
    title: 'TribeLoop',
    description: 'Showcase your product in the best light with interactive demos',

    href: 'https://mapminds.com/',
    website: 'mapminds.com',

    category: { name: 'Node.js, Bootstrap 4, HTML, CSS', href: '#' },
    imageUrl:
      '/logos/dummy.png',

  },


]

const perks = [
  {
    name: 'Free returns',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
];

const stats = [
  { label: 'Developer Since', value: '2018' },
  { label: 'Companies', value: '3' },
  { label: 'Experience', value: '3+' },
  { label: 'Projects worked', value: '25+' },
];


const features2 = [


  {
    title: 'GreyMetrics Web App',
    description:
      "Use industry standard report templates to create reports/dashboards",
    image: '/images/greymetrics_app_sc.png',
    href: 'https://app.greymetrics.com/user/register',
    category: { name: 'Angular, Node.js, Bootstrap 4, HTML, CSS, JavaScript, AWS, MongoDB', href: '#' },
    website: 'app.greymetrics.com',
  },
  {
    title: 'Sites60',
    description:
      "Create your own website from our drag and drop templates",
    image: '/images/sites60_sc.png',
    href: 'https://app.sites60.com/',
    category: { name: 'Next.js, React, Node.js, Tailwind CSS, HTML, CSS, JavaScript, MongoDB', href: '#' },
    website: 'sites60.com',
  },
  {
    title: 'Videoform',
    description:
      'Create and send personalized content to customers & increase conversions',
    image: '/images/videoform_sc.png',
    href: 'https://app.videoform.com',
    category: { name: 'Vue, Nuxt.js, Node.js, Tailwind CSS, HTML, CSS, JavaScript, AWS, MongoDB', href: '#' },
    website: 'app.videoform.com',
  },
  {
    title: 'Vijaya Diagnostic Center',
    description:
      'Vijaya Diagnostic Centre is a leading and certified pathology lab in India.',
    image: '/images/vdc_sc.png',
    href: 'https://www.vijayadiagnostic.com/',
    category: { name: 'Node.js, Bootstrap 4, HTML, CSS, JavaScript, MongoDB', href: '#' },
    website: 'vijayadiagnostic.com',
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function downloadFunc() {
  var anchor = document.createElement('a');
  anchor.setAttribute('href', '/Sai-Surya-Kalagani-Resume.pdf');
  anchor.setAttribute('download', '');
  document.body.appendChild(anchor);
  anchor.click();
  console.log("t")
  anchor.parentNode.removeChild(anchor);
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
        <title>Web Application Developer | Sai Surya Kalagani</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <meta
          name="description"
          content="Build your web Application from scratch. I have extensive experience creating web applications using frontend technologies like Next.js, React, Vue, NuxtJS, Tailwind CSS"
        />
      </Head>

      <Header />
      <div className="relative bg-gray-50 ">
        <main className="lg:relative bg-white h-full mt-4 sm:mt-1 circles_h_80">
          <div className="mx-auto w-full max-w-full pt-20 pb-20 text-center lg:py-48 lg:text-left mt-2 sm:mt-10">
            <div className="px-4 sm:px-16 md:px-18 lg:px-20 xl:px-24">
              <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl md:text-4xl lg:text-5xl flex items-center space-x-3">
                <span className="block xl:inline ">Hey, I am </span>{' '}
                <span className="block text-white bg-orange-600 rounded-2xl px-2 sm:px-6 py-1 sm:py-3 xl:inline font-pacifico">Sai Surya</span>
              </h1>
              <p className="text-left mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-2xl">
                I am a Front End Web Developer , worked for 4 different startups.
               I Really Love Bringing Designs to Life with Code .
              </p>


              <div className="mt-10 flex sm:justify-start  sm:space-x-6 space-x-2 wrapstyle">
                <div className="">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/surya304/" className="flex sm:w-full items-center justify-center rounded-md border border-transparent bg-[#007bb5] px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-5'><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                    &nbsp; Linkedin
                  </a>
                </div>

                <div >
                  <a target="_blank" onClick={downloadFunc}
                    className="flex rounded-md  sm:w-full  items-center justify-center border border-transparent bg-[#55ACEE] px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>

                    Resume
                  </a>

                </div>

                
                <div className="">
                  <a target="_blank" rel="noopener noreferrer"
                    href="https://github.com/surya304"
                    className="flex mg-2 sm:w-full items-center justify-center rounded-md border border-transparent bg-slate-700 px-4 py-3 text-base font-medium text-white md:py-2 md:px-4 md:text-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className='mr-2 w-7 h-7'>
                      <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    Github

                  </a>
                </div>
                {/* <div className="">
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
            </div> */}


              </div>


            </div>
          </div>
          <div className="relative flex items-center w-full sm:h-full lg:absolute lg:inset-y-0 sm:right-40  lg:w-1/3 " >
            {/* <image className="object-cover" src="/images/profile.jpg" alt="Web Application Developer"   /> */}
            <image 
              className="rounded-3xl object-cover object-center shadow-2xl h-full"
              src="/images/profile.jpg"
              alt="About Me"
            />


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
                    <image 
                      className="rounded-3xl object-cover object-center "
                      src="/images/profile1.jpg"
                      alt="About Me"
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
                  {/* <p className="text-lg leading-7">
                    I am a person who is always prepared for whatever may come my way. 
                    I always love to learn , very Hardworking & Good Listener & a Great Team Player 
                    
                  </p> */}
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


        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-2 md:grid-cols-11 lg:grid-cols-11">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <image className="h-10 grayscale hover:grayscale-0" src="/logos/html.svg" alt="HTML" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <image className="h-10 grayscale hover:grayscale-0" src="/logos/javascript.svg" alt="JavaScript" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <image className="h-11 grayscale hover:grayscale-0" src="/logos/react.svg" alt="React" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <image className="h-10 grayscale hover:grayscale-0" src="/logos/next.svg" alt="Next.js" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <image className="h-10 grayscale hover:grayscale-0" src="/logos/nuxt.svg" alt="Nuxt.js" />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <image 
                  className="h-10 grayscale hover:grayscale-0"
                  src="/logos/vue.svg"
                  alt="Vue Js"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <image 
                  className="h-10 grayscale hover:grayscale-0"
                  src="/logos/angular.svg"
                  alt="Angular"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <image 
                  className="h-10 grayscale hover:grayscale-0"
                  src="/logos/jquery.svg"
                  alt="jquery"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <image 
                  className="h-10 grayscale hover:grayscale-0"
                  src="/logos/css.svg"
                  alt="CSS"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <image 
                  className="h-12 grayscale hover:grayscale-0"
                  src="/logos/tailwind.svg"
                  alt="Tailwind CSS"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <image 
                  className="h-10 grayscale hover:grayscale-0"
                  src="/logos/bootstrap.svg"
                  alt="Bootstrap 5"
                />
              </div>
            </div>
          </div>
        </div>


        <section
          id="features"
          aria-label="Features for running your books"
          className="relative overflow-hidden bg-slate-50 pt-20 pb-28 sm:px-32 px-4 sm:py-32 py-4"
        >

          <div className="relative">
            <div className="sm:max-w-2xl max-w-full md:mx-auto md:text-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">My Work 😀</h2>
                <p className="mx-auto mt-3 sm:max-w-2xl max-w-full sm:text-xl text-md text-gray-500 sm:mt-4">
                  Over the years, I have worked on a lot of projects, but these are the ones I am most proud of.
                </p>
              </div>
            </div>
            <Tab.Group
              as="div"
              className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
              vertical={tabOrientation === 'vertical'}
            >
              {({ selectedIndex }) => (
                <>
                  <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-4">
                    <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                      {features2.map((feature, featureIndex) => (
                        <div
                          key={feature.title}
                          className={classNames(
                            'group relative rounded-full py-1 px-4 sm:rounded-r-none sm:rounded-l-xl sm:p-6',
                            selectedIndex === featureIndex
                              ? 'bg-orange-600 sm:bg-orange-100/50 sm:ring-1 sm:ring-inset sm:ring-orange-500/30'
                              : 'hover:bg-white/10 lg:hover:bg-white/5'
                          )}
                        >
                          <h3>
                            <Tab
                              className={classNames(
                                ' font-semibold text-lg focus:outline-none [&:not(:focus-visible)]:focus:outline-none',
                                selectedIndex === featureIndex
                                  ? 'sm:text-orange-600 text-white'
                                  : 'text-gray-400 hover:text-orange-800 lg:text-gray-700'
                              )}
                            >
                              <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                              {feature.title}
                            </Tab>
                          </h3>
                          <p
                            className={classNames(
                              'mt-2 hidden text-sm lg:block',
                              selectedIndex === featureIndex
                                ? 'text-orange-500'
                                : 'text-gray-500 group-hover:text-orange-800'
                            )}
                          >
                            {feature.description}
                          </p>
                          {/* <a href={feature.url}
                        className={classNames(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-orange-500'
                            : 'text-gray-500 group-hover:text-orange-800'
                        )}
                      >
                        {feature.website}
                      </a> */}
                          <a href={feature.url}
                            className={classNames(
                              'mt-2 hidden text-xs lg:block',
                              selectedIndex === featureIndex
                                ? 'text-orange-500'
                                : 'text-gray-500 group-hover:text-orange-800'
                            )}
                          >
                            {feature.category.name}
                          </a>
                        </div>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels className="lg:col-span-7">
                    {features2.map((feature) => (
                      <Tab.Panel key={feature.title} unmount={false}>
                        <div className="relative sm:px-6 lg:hidden">
                          <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                          <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                            {feature.description}
                          </p>
                        </div>
                        <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[75rem]">
                          <Image
                            className="w-full"
                            src={feature.image}
                            alt={feature.title}
                            width="400"
                            height="400"
                            priority
                            sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                          />
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </>
              )}
            </Tab.Group>
          </div>
        </section>


        <div className="relative bg-slate-50 hover:bg-orange-50 hover:duration-500 px-4 pt-12 pb-12 sm:px-32 lg:pt-24 lg:pb-28">

          <section
            className=" mx-auto max-w-md px-4 sm:max-w-full sm:px-6 py-8 lg:px-8"
            aria-labelledby="contact-heading"
          >

            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">My Other Projects 🤩</h2>
              {/* <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Over the years, I have worked on a lot of projects, but these are the ones I am most proud of.
              </p> */}
            </div>
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-4 mt-24 lg:gap-y-16 lg:gap-x-8">
              {posts.map((post) => (
                <div key={post.name} className="flex flex-col rounded-2xl bg-white shadow-lg">
                  <div className="relative flex-1 px-6 pt-12 pb-8 md:px-6">
                    <div className="absolute top-0 inline-block -translate-y-1/2 -translate-x-2 transform rounded-xl w-32 h-12 overflow-hidden px-2 bg-white shadow-md">
                      {/* <post.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                      <image className="h-full w-full object-contain bg-white" src={post.imageUrl} alt={post.website} />

                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                    {/* <p className="mt-4 text-base text-gray-500">{post.description}</p> */}
                    <p className="text-sm mt-4">
                      {/* <a href={post.category.href} className="hover:underline"> */}
                      <span className='text-slate-500 font-medium'>Tech Used:</span> <span className='text-orange-600 font-semibold'>{post.category.name}</span>
                      {/* </a> */}
                    </p>
                  </div>
                  {/* <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8"> */}
                  {/* <a href={post.href} className="text-base font-medium text-gray-500 hover:text-gray-800">
                      Visit Website
                      <span aria-hidden="true"> &rarr;</span>
                    </a> */}

                  {/* <a href={post.href} className="relative z-10 flex text-sm font-medium text-gray-500 hover:text-orange-500">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
                        <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor">
                          </path>
                          </svg>
                          <span className="ml-2">{post.website}</span>
                          </a> */}
                  {/* </div> */}
                </div>
              ))}
            </div>
          </section>
        </div>


        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                  Tools that I use regularly ❤
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  I often get asked what I use to build software and stay productive. My favourites are here.
                </p>

              </div>
              <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center grayscale hover:grayscale-0 items-center bg-slate-50 hover:bg-slate-50 hover:duration-500 py-8 px-8">
                  <svg width="87" height="30" viewBox="0 0 87 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.805 1.294l16.6-1.226c2.039-.175 2.563-.057 3.845.875l5.299 3.733c.874.642 1.165.817 1.165 1.516v20.473c0 1.283-.466 2.042-2.097 2.158L7.34 29.99c-1.224.058-1.807-.117-2.448-.934L.99 23.982c-.7-.934-.99-1.633-.99-2.45V3.334c0-1.049.466-1.924 1.805-2.04z" fill="#fff"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.405.068l-16.6 1.226C.466 1.41 0 2.285 0 3.334v18.198c0 .817.29 1.516.99 2.45l3.902 5.074c.641.817 1.224.992 2.448.934l19.277-1.167c1.63-.116 2.097-.875 2.097-2.158V6.192c0-.663-.262-.854-1.033-1.42a85.473 85.473 0 01-.133-.096L22.25.943c-1.282-.932-1.806-1.05-3.845-.875zM7.776 5.857c-1.574.106-1.931.13-2.825-.597L2.678 3.452c-.231-.234-.115-.526.467-.584l15.958-1.166c1.34-.117 2.038.35 2.562.758l2.737 1.983c.117.059.408.408.058.408l-16.48.992-.204.014zM5.941 26.49V9.11c0-.759.233-1.109.931-1.168L25.8 6.834c.642-.058.932.35.932 1.108v17.264c0 .759-.117 1.401-1.165 1.459l-18.113 1.05c-1.048.058-1.513-.291-1.513-1.225zm17.88-16.448c.116.525 0 1.05-.525 1.11l-.873.173v12.832c-.758.408-1.456.641-2.039.641-.932 0-1.165-.292-1.863-1.166l-5.709-8.982v8.69l1.806.409s0 1.05-1.457 1.05l-4.017.233c-.117-.234 0-.817.407-.933l1.049-.291v-11.49L9.144 12.2c-.117-.525.174-1.283.99-1.342l4.31-.29 5.94 9.098v-8.049l-1.514-.174c-.117-.643.349-1.11.931-1.167l4.02-.234z" fill="#000"></path>
                    <path d="M41.434 21.251v-7.91h.137l5.704 7.91h1.796V9.627h-1.997v7.902h-.137l-5.704-7.902H39.43V21.25h2.005zM54.715 21.429c2.635 0 4.238-1.724 4.238-4.584 0-2.852-1.611-4.584-4.238-4.584-2.618 0-4.237 1.74-4.237 4.584 0 2.86 1.595 4.584 4.237 4.584zm0-1.676c-1.393 0-2.19-1.063-2.19-2.908 0-1.837.797-2.908 2.19-2.908 1.386 0 2.183 1.071 2.183 2.908 0 1.845-.789 2.908-2.183 2.908zM60.778 10.28v2.215h-1.393v1.595h1.393v4.809c0 1.708.806 2.393 2.828 2.393.386 0 .757-.04 1.047-.097v-1.563c-.242.024-.395.04-.677.04-.837 0-1.208-.386-1.208-1.256V14.09h1.885v-1.595h-1.885v-2.216h-1.99zM65.85 21.251h1.99v-8.813h-1.99v8.813zm.991-10.27c.66 0 1.192-.533 1.192-1.201 0-.669-.531-1.209-1.192-1.209-.652 0-1.192.54-1.192 1.209 0 .668.54 1.2 1.192 1.2zM73.299 21.429c2.634 0 4.237-1.724 4.237-4.584 0-2.852-1.611-4.584-4.237-4.584-2.619 0-4.238 1.74-4.238 4.584 0 2.86 1.595 4.584 4.238 4.584zm0-1.676c-1.394 0-2.192-1.063-2.192-2.908 0-1.837.798-2.908 2.192-2.908 1.385 0 2.183 1.071 2.183 2.908 0 1.845-.79 2.908-2.183 2.908zM78.725 21.251h1.998V16.12c0-1.297.75-2.119 1.941-2.119 1.217 0 1.78.677 1.78 2.022v5.228h1.999v-5.703c0-2.103-1.072-3.287-3.037-3.287-1.314 0-2.2.604-2.619 1.587h-.137v-1.41h-1.925v8.813z" fill="#000"></path>
                  </svg>
                </div>
                <div className="col-span-1 flex justify-center grayscale hover:grayscale-0 items-center space-x-4 bg-slate-50 hover:bg-slate-50 hover:duration-500 py-8 px-8">
                  <image className="max-h-8" src="/logos/vscode.svg" alt="Visual Studio Code" />
                  <span className="font-semibold sm:text-md text-sm text-slate-800">Visual Studio Code</span>
                </div>
                <div className="col-span-1 flex justify-center grayscale hover:grayscale-0 bg-slate-50 hover:bg-slate-50 hover:duration-500 py-8 px-8">
                  <image className="max-h-12" src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 bg-slate-50 hover:bg-slate-50 hover:duration-500 py-8 px-8">

                  <image className="max-h-10" src="/logos/slack.png" alt="Slack" />
                  <span className="font-semibold sm:text-md text-lg text-slate-800">Slack</span>

                </div>
                <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 bg-slate-50 hover:bg-slate-50 hover:duration-500 py-8 px-8">

                  <image className="max-h-12" src="/logos/webflow.svg" alt="Webflow" />
                  <span className="font-semibold sm:text-md text-lg text-slate-800">Webflow</span>

                </div>

                <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 bg-slate-50 hover:bg-slate-50 hover:duration-500 py-8 px-8">
                  <image 
                    className="max-h-8"
                    src="/logos/figma.svg"
                    alt="Figma"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100">
          <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block m-2">Looking for a developer?</span>
              <span className="block m-2">You are at the right place 😃</span>
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/surya304/"
                  className="inline-flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium text-white hover:bg-orange-600"
                >
                  Contact Me 🙋🏻‍♂️
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
