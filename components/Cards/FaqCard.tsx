import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const faqs = [
  {
    question: "Pourquoi installer une borne électrique ?",
    answer: `Recharge pratique de véhicules électriques : Si vous possédez un véhicule électrique, avoir une borne électrique à domicile peut rendre la recharge de votre voiture plus facile et plus pratique. Vous n'aurez plus besoin de trouver une station de recharge publique et vous pourrez recharger votre voiture à tout moment, à domicile. 
    \nÉconomies financières : Si vous conduisez régulièrement une voiture électrique, l'utilisation d'une borne électrique à domicile peut vous permettre de réaliser des économies sur les coûts de recharge. En effet, les tarifs des bornes de recharge publiques peuvent être plus élevés que ceux des tarifs domestiques. 
    \nGain de temps : En ayant une borne électrique à domicile, vous pouvez recharger votre voiture pendant la nuit ou pendant que vous travaillez, sans avoir à attendre à une station de recharge publique. Cela peut vous faire gagner du temps précieux. 
    \nMeilleure autonomie de conduite : En ayant une borne électrique à domicile, vous pouvez recharger votre voiture plus régulièrement, ce qui peut améliorer l'autonomie de votre voiture électrique et vous permettre de conduire plus longtemps avant de devoir la recharger. 
    \nÉcologie : L'utilisation de voitures électriques peut contribuer à la réduction des émissions de gaz à effet de serre et de la pollution atmosphérique. En ayant une borne électrique à domicile, vous pouvez utiliser de l'électricité provenant de sources renouvelables, comme l'énergie solaire ou éolienne, ce qui peut encore réduire votre empreinte carbone.`
  },
  {
    question: "Quels sont les services que nous offrons ?",
    answer: `Notre équipe est composé d'estimateur et d'électricien certifié pour l'installation d'une borne électrique. 
    \nConnaissance et expertise : Un électricien certifié possède les connaissances et l'expertise nécessaires pour installer une borne électrique en toute sécurité et conformément aux normes en vigueur. Cela peut vous donner l'assurance que votre borne électrique fonctionnera de manière optimale et ne présentera aucun risque pour votre sécurité.
    \nConformité aux normes : L'installation d'une borne électrique doit être conforme aux normes et aux réglementations en vigueur. Un électricien certifié est au courant des normes et des réglementations applicables et s'assurera que votre installation est conforme.
    \nFiabilité : L'installation d'une borne électrique est un investissement important. En faisant appel à un électricien certifié, vous pouvez être sûr que votre installation sera fiable et durable.
    \nService complet : Un électricien certifié peut offrir un service complet, qui comprend l'installation de la borne électrique, la mise en place de l'infrastructure nécessaire, la vérification de la conformité aux normes, et même l'entretien de la borne électrique à long terme.
    \nAssistance en cas de problème : Si vous rencontrez des problèmes avec votre borne électrique, un électricien certifié peut vous offrir une assistance rapide et efficace pour résoudre le problème.
    \nEn somme, l'embauche d'un électricien certifié pour l'installation de votre borne électrique peut vous donner la tranquillité d'esprit que votre installation est sûre, fiable et conforme aux normes en vigueur. Nos services d'installation de borne électrique vous offrent une solution pratique et efficace pour charger votre voiture électrique à domicile ou au travail. Nous proposons une installation professionnelle et de qualité supérieure pour vous offrir une expérience de charge fiable et sécurisée. Notre équipe d'experts est à votre disposition pour vous guider à travers toutes les étapes du processus, de la sélection de la borne appropriée à l'installation et la mise en service. Nous offrons également un service après-vente pour répondre à toutes vos questions et assurer un suivi régulier pour vous garantir un fonctionnement optimal de votre borne de recharge. Contactez-nous dès maintenant pour en savoir plus sur nos services d'installation de borne électrique et pour obtenir une estimation gratuite.`
  },
  {
    question: "Quelle est la durée d'une installation ?",
    answer: `En général, une installation typique peut prendre entre 3 et 4 heures. La durée d'installation d'une borne électrique dépend de plusieurs facteurs, tels que la complexité de l'installation, la disponibilité des ressources, la configuration du site et les autorisations nécessaires.`
  },
  {
    question: "Qui peut installer une borne électrique ?",
    answer: `Il est important de noter que l'installation d'une borne électrique doit être effectuée par un installateur agréé et qualifié, afin de garantir que l'installation est effectuée conformément aux normes et aux réglementations en vigueur pour la sécurité et la qualité de l'installation.  Nos électriciens font partie de la CMEQ (La Corporation des maîtres électriciens du Québec).`
  },
  {
    question: "Saviez-vous que vous pouvez bénéficier d'une subvention pour l'installation de votre borne électrique ?",
    answer: `En effet, vous pourriez bénéficier d'une aide financière forfaitaire de 600 $ à l'achat et à l'installation d'une borne de recharge à domicile de 240 volts. Voici le lien pour plus d'information.`
  },
  // More questions...
]

export default function FaqCard() {
  return (
    <div className="bg-white mb-24">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 text-center">Les questions fréquentes</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6 ">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12 ">
                      <p className="text-base leading-7 text-gray-600 whitespace-pre-wrap">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
      
        <div className="mt-20 sm:mt-10">
            <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-[#E6F7F8] px-6 py-24 text-center  sm:rounded-3xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-lg font-bold tracking-tight text-black sm:text-4xl">
                        Vous n'avez pas trouvé de réponses à vos question ?
                    </h2>
                    <Link href="/about#contact">
                        <button className='mt-6 rounded-md bg-primary cursor-pointer py-2.5 px-3.5 text-lg font-semibold text-white shadow-sm hover:bg-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                            Contactez-nous
                        </button> 
                    </Link>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black">
                        Un conseiller Instaborne saura répondra à toutes vos questions
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
