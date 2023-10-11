import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Work', href: '#' , current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-custom">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
          
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 custom-text-color"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              // <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 custom-text-color">
              //   {item.name}
              // </a>


<a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'custom-selected text-black' : ' custom-text-color hover:text-underlined',
                          'rounded-full px-3 py-2 text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
            ))}


          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-custom px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
             
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 custom-text-color "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 custom-text-color"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
             
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
       
        </div>
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
      
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl" >
            Hi. I am Sai Surya.


            </h1>

            <h1 className="mt-5 text-6xl font-bold tracking-tight custom-text-color text-center sm:text-8xl" >
            A Front End Developer.
              </h1>
            <p className="mt-20 text-lg leading-8 custom-text-color font-semibold">
            Transforming Ideas into Reality Using Code and Imagination

            </p>
       
          </div>
        </div>
     
      </div>
    </div>
  )
}
