import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {useRouter} from 'next/router';

const navigation = [
  { name: 'Nos services', href: '/services' },
  { name: 'Prix', href: '/#prix' },
  { name: 'Franchise', href: '/franchise' },
  { name: 'À propos', href: '/about' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [notMiddleRefresh , setNotMiddleRefresh] = useState(false);

  const [backgroundTransparancy, setbackgroundTransparancy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const router = useRouter()

  if (typeof window !== "undefined") {
    
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   
  });

  const handleScroll = () => {
    setNotMiddleRefresh(true);
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparancyVar:number = clientWindowHeight / 600;

    if (backgroundTransparancyVar < 1) {
      let paddingVar = 0 - backgroundTransparancyVar * 20;
      let boxShadowVar = backgroundTransparancyVar * 0.1;
      setbackgroundTransparancy(backgroundTransparancyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  const regex = new RegExp('^/new-quote\/.*');

  return (
    <header className={` ${regex.test(router.pathname) ? 'bg-[#03252F]' : 'bg-transparent'} fixed w-full z-10 top-0`}  style={ !regex.test(router.pathname) ? {
      background: `rgba(3, 37, 47, ${notMiddleRefresh && window.scrollY<500 ? backgroundTransparancy : '1' })`,
      boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
    } : {}}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Instaborne</span>
            <img className="h-14 w-auto" src="/LogoBlanc.svg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon color='white' className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm lg:text-lg font-semibold leading-6 text-white pt-2">
                {item.name}
              </a>
            ))}

            <Link href="/new-quote">
              <button className='rounded-md bg-[#02B5A1] py-2.5 px-3.5 text-sm lg:text-lg font-semibold text-white shadow-sm hover:bg-[#02B5A1]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Estimation gratuite
              </button>
            </Link>  
          </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Instaborne</span>
              <img
                className="h-8 w-auto"
                src="/logo.webp"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                 <Link href="/new-quote">
                    <button className='w-full rounded-md bg-[#02B5A1] mt-6 py-3.5 px-3.5 text-sm lg:text-lg font-semibold text-white shadow-sm hover:bg-[#02B5A1]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                      Estimation gratuite
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
