import Link from "next/link";
import React from "react";

function FormComplete() {

  return (
    <>
      <div className="flex flex-col text-center py-40 space-y-8">
        <h1 className="text-4xl font-bold text-black">Votre rendez-vous a été validé !</h1>
        <p className="text-md text-black">Vous recevrez sous peu un courriel indiquant que votre rendez-vous a été confirmé. 
        Veuillez vérifier votre boîte de réception pour trouver les informations dont vous avez besoin. Si vous avez des questions n'hésitez pas à nous contacter par courriel ou téléphone.</p>
        <Link href="/">
            <button
                className="rounded-md bg-[#02B5A1] py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#02B5A1]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
                Retourner a l'acceuil
            </button>
        </Link>
      </div>
    </>
  );
}

export default FormComplete;
