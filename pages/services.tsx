import ServiceHero from "@/components/Heroes/ServiceHero";
import Advantage from "@/components/Sections/Advantage";
import InstallationCTA from "@/components/Sections/InstalltionCTA";
import Services from "@/components/Sections/Service";
import ServicesCTA from "@/components/Sections/ServicesCTA";
import React from "react";

function services() {
  const listeSatisfaction = [
    { titre: "Prise de rendez-vous en ligne ou par téléphone." },
    { titre: "Ramassage de la borne chez le concessionnaire" },
    {
      titre:
        "Choix du jour et de l'horaire de passage pour l'installation de la borne.",
    },
    {
      titre:
        "Synchronisation entre l'installation et la livraison du véhicule.",
    },
    {
      titre: "Application des normes d'installation lié à votre environnement.",
    },
    { titre: "Suivi post-installation." },
  ];
  return (
    <>
      <ServiceHero />
      <Advantage />
      <div className="bg-white text-black">
        <div className="flex flex-col justify-center items-center gap-14 mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-20 max-sm:py-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col-reverse max-lg:flex-col-reverse items-center min-lg:pt-14 gap-14 w-auto lg:grid lg:grid-cols-[auto_auto] lg:gap-x-16">
            <div className="flex flex-col items-start gap-5 leading-1 max-w-2xl">
              <h3 className="font-bold text-3xl text-[#03252F]">
                Une prise en charge depuis votre concessionnaire
              </h3>
              <div className="flex flex-col gap-3">
                <div className="mt-2 font-light text-base text-[#52525B]">
                  Nos représentants sont disponibles en tout temps pour
                  faciliter la coordination lors de votre achat chez votre
                  concessionnaire.
                </div>
                <div className="mt-2 font-light text-base text-[#52525B]">
                  Leur mission, en collaboration avec le concessionnaire, est de
                  s'assurer de faciliter les échanges d'information et la
                  coordination entre la livraison et l'installation de la borne.
                </div>
                <div className="mt-2 font-light text-base text-[#52525B]">
                  Chacun des représentants ont suivi une formation Instaborne,
                  afin d'acquérir un savoir-faire en matière de conseil, mais
                  aussi, d'être sensibilisé à l'importance de vous soutenir dans
                  vos choix afin de prendre des décisions éclairées.
                </div>
              </div>
            </div>
            <div className="w-[540px] h-[340px] bg-white max-lg:w-full max-lg:h-full flex">
              {" "}
              <img
                className="object-cover w-full h-full rounded-3xl "
                src="/serviceDealerphip.webp"
                alt="Dealerphip purchase"
              />
            </div>
          </div>
          <div className="w-full bg-[#03252F]/90 p-12 rounded-lg">
            <div className="flex flex-col max-lg:flex-col-reverse items-center min-lg:pt-14 gap-14 w-auto max-lg:w-full lg:grid lg:grid-cols-[auto_auto] lg:gap-x-16 lg:self-baseline">
              <div className="flex flex-col items-start gap-5 leading-1 max-w-2xl max-lg:w-full lg:col-start-[2] lg:row-start-[1]">
                <h3 className="font-bold text-3xl text-white">
                  Satisfaction client
                </h3>
                <div className="flex flex-col gap-3 ">
                  {listeSatisfaction.map((lS, i) => (
                    <div key={i} className="flex flex-row items-center gap-2 p-0">
                      <div>
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 16 12"
                          fill="#02B5A1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L5 9.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893Z"
                            fill="##02B5A1"
                          />
                        </svg>
                      </div>
                      <div className="mt-2 font-light text-base text-white">
                        {lS.titre}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[540px] h-[340px] bg-[#03252F] max-lg:w-full rounded-lg">
                {" "}
                <img
                  className="object-cover w-full h-full rounded-3xl"
                  src="/satisfactionClient.jpeg"
                  alt="Thumbs up"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse max-lg:flex-col-reverse items-center min-lg:pt-14 gap-14 w-auto max-lg:w-full lg:grid lg:grid-cols-[auto_auto] lg:gap-x-16">
            <div className="flex flex-col items-start gap-5 leading-1 max-w-2xl max-lg:w-full">
              <h3 className="font-bold text-3xl text-[#03252F]">
                Accès à une gamme élargie de solutions
              </h3>
              <div className="flex flex-col gap-3 ">
                <div className="mt-2 font-light text-base text-[#52525B]">
                  Instaborne vous assure en tout temps un service de qualité
                  avec son équipe d'expert qualifié et spécialisé en borne de
                  recharge électrique.
                </div>
                <div className="mt-2 font-light text-base text-[#52525B]">
                  Cette équipe d'expert à la capacité de répondre aux besoins
                  des clients, et, est également en mesure de résoudre de
                  nouvelles problématiques rencontré sur le terrain afin de vous
                  satisfaire.
                </div>
                <div className="mt-2 font-light text-base text-[#52525B]">
                  Pour plus d'autonomie, et afin de vous familiariser avec le
                  service, Instaborne vous mets à disposition une vidéo
                  explicative. Un point de service est également offert dans
                  votre succursale, pour informer, clients et visiteurs sur les
                  avantages d'une borne de recharge à domicile, ainsi que le
                  processus d'installation.
                </div>
              </div>
            </div>
            <div className="w-[540px] h-[340px] bg-white max-lg:w-full max-lg:h-full">
              {" "}
              <img
                className="object-cover w-full rounded-3xl"
                src="/serviceCarCharging.jpg"
                alt="Car getting plug in"
              />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <InstallationCTA />
    </>
  );
}

export default services;
