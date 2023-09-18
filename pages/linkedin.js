import { useEffect, useState, Fragment } from 'react'
import {  Transition, Dialog } from '@headlessui/react'
import {
    XMarkIcon,
  } from '@heroicons/react/24/outline'


import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


const posts = [
    {
      title: 'Boost your conversion rate',
      imageUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7010887775080108033',
    },
    {
      title: 'Responsive Image Gallery',
      imageUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7010478870013374464',
    },
    {
      title: 'Responsive Image Gallery',
      imageUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:share:7009140003452706816',
    },
    {
      title: 'Responsive Image Gallery',
      imageUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7007669841172078592',
    },
    {
      title: 'Responsive Image Gallery',
      imageUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:share:7007199053264412672',
    },
    {
      title: 'Responsive Image Gallery',
      imageUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7006534133573181440',
    },
    {
      title: 'Responsive Image Gallery',
      imageUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7005465108797677568',
    },
    {
      title: 'Responsive Image Gallery',
      imageUrl:
        'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7004855760476135424',
    },

  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [openContact, setOpenContact] = useState(false)

  return (

    <>
      <Head>
        <title>LinkedIn Code Snippets</title>
        <link rel="shortcut icon" href="/images/dp_11.png" />

        <meta
          name="description"
          content="HTML and CSS snippets from Codepen, Posted on LinkedIn"
        />
      </Head>
      <Header />
       <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-4 sm:px-6 lg:px-8">
                <div className="text-center">
                <h2 className="text-lg font-semibold text-orange-600">Social Media</h2>
                <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Take a look at <span className='text-blue-600'>LinkedIn</span> posts
                </p>
                <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                    I have started posting on LinkedIn since 2020, I recently started posting the basics of HTML, CSS, and JavaScript. Please take a look 👇
                </p>
                </div>
            </div>
        </div>


        <div className="mx-auto mt-12 grid max-w-full gap-5 lg:max-w-none lg:grid-cols-4 sm:px-24 sm:py-10 px-4 py-4">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              {/* <div className="flex flex-1 flex-col justify-between bg-white p-2"> */}
                <iframe src={post.imageUrl} style={{height:'85vh'}} width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
              {/* </div> */}
            </div>
          ))}
        </div>



        <div className="bg-white">
            <div className="mx-auto max-w-full py-16 px-4 sm:px-24">
                <div className="overflow-hidden rounded-lg bg-orange-600 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            <span className="block">Looking for more posts like this?</span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-orange-50">
                            Click the link below and we will land on all posts of mine and don&apos;t forget to follow me.
                        </p>
                        <a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/jeevankumarkaree/recent-activity/shares/"
                            className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-bold text-orange-600 shadow hover:bg-indigo-50"
                        >
                            Let&apos;s go to LinkedIn 🚀
                        </a>
                        </div>
                    </div>
                    <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
                        <img
                        className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-16"
                        src="/images/linkedin_prof.png"
                        alt="LinkedIn Profile"
                        />
                    </div>
                </div>
            </div>
        </div>

    <Footer />




    {/* Google form popup */}
    <Transition.Root show={openContact} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenContact}>
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
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebbYdFHg7ZT0_ZY3IqAqU1FWkP0_QL7NMptyOxWQTIO2wkYg/viewform?embedded=true" className="contactForm">Loading…</iframe>
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
