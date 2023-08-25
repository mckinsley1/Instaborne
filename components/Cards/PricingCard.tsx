import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Checkmark from '../icons/checkmark'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingCard() {
  function downloadBrochure() {
    fetch('./Instaborne-brochure.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Instaborne-brochure.pdf';
          alink.click();
      })
  })
  }

  return (
    <div id='prix' className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-4xl font-semibold leading-7 text-primary py-5">Forfaits</h2>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Un prix abordable qui convient a tous vos besoins.</h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">Que ce soit à domicile ou pour votre entreprise nous pouvons installer une borne fiable et efficace vous permettant de recharger votre véhicule en toute sécurité.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Service régulier</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">Les demandes d'estimations sont gratuites.</p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-teal-600">Inclus dans le service</h4>
              <div className="h-px flex-auto bg-gray-100"/>
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <li className="flex gap-x-3">
                <Checkmark className="h-6 w-5 flex-none text-teal-600"/>
                Estimation gratuite
              </li>
              <li className="flex gap-x-3">
                <Checkmark className="h-6 w-5 flex-none text-teal-600"/>
                Installation de borne
              </li>
              <li className="flex gap-x-3">
                <Checkmark className="h-6 w-5 flex-none text-teal-600"/>
                Materiel de branchement
              </li>
              <li className="flex gap-x-3">
                <Checkmark className="h-6 w-5 flex-none text-teal-600"/>
                Garantie 5 ans
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Votre installation avec subvention à partir de</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">999$</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">CAD</span>
                </p>
                <div className="flex flex-col mt-5 border-t border-gray-900/5 py-2 ">

          <p className="text-gray-500 text-left font-inter text-xs">1599$ - Installation</p>
          <p className="text-gray-500  text-left font-inter text-xs">- 600$ - Subvention gouvernementale</p>
        </div>
                <Link href="/new-quote" className='mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'>
                    Demande d'estimation
                </Link>
                <p className='text-xs mt-7'>*Des conditions spéciales s'appliquent. Les prix et conditions ci-haut mentionnés sont susceptibles de changer en tout temps et sans préavis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid'>
        <button onClick={downloadBrochure} className='text-primary place-self-center ring-1 ring-inset ring-primary/30 hover:ring-primary/70 mt-8 block rounded-md py-2 px-32 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'>
            Télécharger la brochure (pdf)
          </button>
        <Link href="https://vehiculeselectriques.gouv.qc.ca/rabais/domicile/programme-remboursement-borne-recharge-domicile.asp" target='_BLANK' className='text-blue-600 underline place-self-center ring-0 hover:text-primary/70 mt-4 block rounded-md py-2 px-32 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'>
            Profitez de la subvention gouvernementale (-600$)
          </Link>
      </div>
    </div>
  )
}