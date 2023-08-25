import Link from "next/link";
import React from "react";
import styles from './InstallationTypesSection.module.css'

function InstallationTypesSection() {
  return (
    <>
      <div className="flex flex-col bg-white py-10">
        <div className="m-auto max-w-[1280px]">
        <div className="m-auto text-center max-w-2xl self-center pb-7">
          <h1 className="text-secondary text-center text-4xl font-bold">
            L'installation de recharge électrique pour tous !
          </h1>
          <br />
          <h2 className="leading-9 text-gray-600">
            Instaborne prend en charge tout type de projets d'installation de
            borne de recharge électrique. Alors que ce soit pour votre
            entreprise, maison ou votre copropriété nous sommes la solution
            d'installation pour votre passage à l'électrique !
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
          <div className={` ${styles.bg_gradient} relative overflow-hidden rounded-lg shadow-lg sm:mt-6`}>
            <img
              className="object-cover w-full h-96 brightness-50"
              src="/installationTypeMaison.jpg"
              alt="Image Maison"
            />

            <div className="absolute bottom-24 px-6 py-4 text-center">
              <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white">
                Maison
              </h4>
              <p className="leading-normal text-gray-200 text-xl">
                Ne dépendez plus des bornes publiques, optez pour votre propre
                borne de recharge installée directement à votre domicile.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg sm:mt-6">
            <img
              className="object-cover w-full h-96 brightness-50"
              src="/installationTypeCopropriete.jpg"
              alt="Image Copropriété"
            />

            <div className="absolute bottom-24 px-6 py-4 text-center">
              <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white">
                Co-Propriétés
              </h4>
              <p className="leading-normal text-gray-200 text-xl">
                Soyez propriétaire de votre propre borne de recharge installée
                directement sur l'aire de stationnement de votre copropriété.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg sm:mt-6">
            <img
              className="object-cover w-full h-96 brightness-50"
              src="/installationTypeEntreprise.jpg"
              alt="Image entreprise"
            />

            <div className="absolute bottom-24 px-6 py-4 text-center">
              <h4 className="mb-3 text-4xl font-semibold tracking-tight text-white">
                Entreprise
              </h4>
              <p className="leading-normal text-gray-200 text-xl">
                Optez pour nos bornes de recharge électrique et simplifiez la
                vie de vos employés, collaborateurs, et clients.
              </p>
            </div>
            <div className="absolute bg-gradient-to-t from-white via-black to-black w-full" />
          </div>
        </div>

        <div className="m-auto text-center place-self-center mt-8">
          <Link href="/new-quote">
            <button className="mt-6 rounded-md bg-[#02B5A1] py-2.5 px-3.5 text-lg font-semibold text-white shadow-sm hover:bg-[#02B5A1]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Demande estimation gratuite
            </button>
          </Link>
        </div>
      </div>
    </div>
        
    </>
  );
}

export default InstallationTypesSection;
