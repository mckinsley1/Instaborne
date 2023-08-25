import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function ContactForm() {

    const { register, handleSubmit, reset, formState: {errors}} = useForm();

    const [sending, setSending] = useState(false);
    const [formSent, setFormSent] = useState(false);

    const onSubmit = async (data: any) => {
      setSending(true)

      let request = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        message: data.message
      }

      axios.post('/api/sendContactForm', request)
        .then(response => {
            setSending(false)
            setFormSent(true)
            reset();
        })

        .catch(error => {
            if(error){
                console.log(error);
            }
        })

        setTimeout(() => setFormSent(false), 3000)

    };

  return (
    <div className="relative isolate bg-[#FAFAFA]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-24">

          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
      
            <h2 className="text-3xl font-bold tracking-tight text-secondary">Contactez-nous</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Pour toute demande d'information ou pour 
            obtenir une soumission gratuite, veuillez remplir le formulaire.<br/> Notre équipe est là pour vous aider.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                    +1 (514)-312-3232
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900">
                  <span className="flex" style={{ unicodeBidi : 'bidi-override', direction: 'rtl'  }} >
                ac.enrobatsni@ofni</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-24" id="contact">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Prénom
                </label>
                  <input
                    {...register('firstName', {required: true})}
                    id="firstName"
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.firstName ? <p className="pt-2 text-red-500">Veuillez entrer votre prénom</p> : ""}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nom
                </label>
                  <input
                    {...register("lastName", {required: true})}
                    id="lastName"
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.lastName ? <p className="pt-2 text-red-500">Veuillez entrer votre nom</p> : ""}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Courriel
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("email", {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                    id="email"
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.email ? <p className="pt-2 text-red-500">Veuillez entrer votre courriel</p> : ""}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
                  Téléphone
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("phoneNumber", {required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm})}
                    id="phoneNumber"
                    type="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.phoneNumber ? <p className="pt-2 text-red-500">Veuillez entrer un numéro de téléphone valide</p> : ""}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register("message", {required: true})}
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                  {errors.message ? <p className="pt-2 text-red-500">Veuillez entrer votre message</p> : ""}
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              {formSent ? <p data-testid='confimationMessage' className='m-4'>Votre formulaire a bien été envoyé</p> : ''}                           
              {sending? 
                  <button disabled type="button" data-testid="btnSending" className="text-white bg-primary focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-primary dark:hover:bg-secondary/50 inline-flex items-center">
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    En cours...
                  </button>
                :
                <button
                  type="submit"
                  data-testid="btnSubmit"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Envoyer
                </button>
                }
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
