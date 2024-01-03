import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navigation from '../components/Navigation'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const navigation = [
  { name: 'Work', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
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


      <div className="relative isolate px-6 pt-14 lg:px-8">

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
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">

          <div className="text-center">
            {/* <h1 className="text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl relative" > */}
            <h1 className={`text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl ${loaded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000`}>

              Hi. I am Sai Surya.
              <span className='absolute right-4 top-[-50px]'>

                <img src='/images/star.png' className="h-10 w-10 mt-5 mx-auto sm:h-20 sm:w-20" alt='start' />


              </span>




            </h1>



            <h1 className=
              {`relative mt-5 text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl ${loaded ? 'translate-y-5' : 'translate-y-full'} transition-transform duration-1000`}
            >

              A Front End Developer.
              <span className='absolute left-0 bottom-[-80px]'>

                <img src='/images/star.png' className="h-10 w-10 mt-5 mx-auto sm:h-20 sm:w-20" alt='start' />


              </span>


            </h1>
            <p className={` mt-20 text-lg leading-8 custom-text-color font-semibold ${loaded ? 'translate-y-5' : 'translate-y-full'} transition-transform duration-1000 `}>
            I am a Front End Web Developer , worked for 4 different startups. I Really Love Bringing Designs to Life with Code .
            </p>


            <div className="flex justify-center space-x-4 mt-10">
              <a href="https://github.com/surya304" target='_blank' rel="noreferrer" className="icon-style text-2xl text-black-500 rounded-full p-2 transition-colors duration-200 w-10">
                <FaGithub />
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
    </div>
  )
}
