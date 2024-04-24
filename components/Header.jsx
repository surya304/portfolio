import { useEffect, useState, Fragment } from 'react'
import { Popover } from '@headlessui/react'
import Link from 'next/link'
import { Transition, Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'



export function Header() {
  const [openContact, setOpenContact] = useState(false)

  return (
    <>
    <header className="relative z-20 pb-11 lg:pt-11">
      <Popover className="z-50 w-full bg-white shadow-lg fixed top-0">
          <div className="mx-auto max-w-full px-4 sm:px-6">
            <div className="flex items-center justify-between py-2 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <span className="sr-only">Your Company</span>
              
                  <h1 className="text-3xl font-bold tracking-tight sm:text-3xl flex items-center space-x-3">
                    <span className="block text-slate-600 bg-orange-100 rounded-2xl px-2 sm:px-5 py-1 sm:py-2 xl:inline font-pacifico">S</span>
                  </h1>
                </Link>
              </div>
              <div className="items-center justify-end md:flex md:flex-1 lg:w-0 md:space-x-8">
                <Link href="https://www.linkedin.com/in/surya185/" className="cursor-pointer font-medium text-gray-500 hover:text-gray-900 hover:underline hover:text-orange-600">
                  LinkedIn
                </Link>
            
              </div>
            </div>
          </div>
       </Popover>
    </header>



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
