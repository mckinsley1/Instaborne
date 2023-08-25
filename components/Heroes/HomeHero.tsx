import Link from "next/link";
import styles from './HomeHero.module.css'

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const values = [
  {
    description:
      "Une équipe d'experts doté de plus de 20 ans d'expérience dans le domaine.",
    value: "Savoir-faire",
  },
  {
    description:
      "Nous intervenons rapidement pour votre installation et ou dépannage.",
    value: "Rapide",
  },
  {
    description:
      "Nous adaptons notre service et nos produits en fonction de vos besoins",
    value: "Flexible",
  },
];

const showModalFranchise = () => (
  
  console.log("MODAL HERE")
 
)

export default function HomeHero() {
  return (
    <div className={`${styles.bg_gradient} h-90 overflow-hidden py-40 md:py-16 sm:mt-6` }>
      <img
        src="/Instaborne-main-bg2.jpg"
        alt=""
        className="absolute top-0 -z-10 w-full h-full  object-cover object-center brightness-50"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 align-middle">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:pl-8 mt-20">
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-8xl">
            On se <span className="text-[#02B5A1]">charge</span> de vous !
          </h2>
          <p className="mt-6 text-xl leading-8 text-white">
            Rechargez avec tranquillité ! Faites appel à Instaborne pour
            l'installation de votre borne de recharge pour véhicules
            éléctriques.
          </p>
          <Link href="/new-quote">
            <button className="mt-6 rounded-md bg-[#02B5A1] py-2.5 px-3.5 text-lg font-semibold text-white shadow-sm hover:bg-[#02B5A1]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Commencer l'estimation
            </button>
          </Link>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-1 lg:grid-cols-4 lg:divide-x">
            {values.map((value) => (
              <div key={value.value} className="flex flex-col-reverse lg:pl-5">
                <dt className="text-xl leading-7 text-white py-5 min-w-[280px]">
                  {value.description}
                </dt>
                <dd className="text-4xl font-bold leading-9 tracking-tight text-white min-w-full">
                  {value.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <Link href="/franchise"        
       
        className='mx-auto text-white place-self-center ring-1 ring-inset max-w-lg ring-white hover:text-primary hover:ring-primary/30 mt-20 block rounded-md py-2 px-32 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
      >
        Franchise disponible
      </Link> 
      </div>
    </div>
  );
}
