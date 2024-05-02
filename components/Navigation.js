import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'


function Navigation({ navigation }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



    return (
        <header className=" inset-x-0 sticky top-0" style={{zIndex:'1000'}} >
            <nav className="flex items-center justify-between p-6 lg:px-8 " aria-label="Global" >
                <div className="flex lg:flex-1">

                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 custom-text-color"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ?  <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 p-3" style={{background:'hsla(158, 23%, 18%, .7)',backdropFilter:'blur(20px) saturate(1.7)',borderRadius:'30px'}}>
                    {navigation.map((item) => (



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
                            {mobileMenuOpen ?  <XMarkIcon className="h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" />}

                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        // className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 custom-text-color"

                                        className={classNames(
                                            item.current ? 'custom-selected text-black' : 'custom-text-color hover:text-black',
                                            'rounded-full px-3 py-2 text-lg font-medium block'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
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
    );
}

export default Navigation;