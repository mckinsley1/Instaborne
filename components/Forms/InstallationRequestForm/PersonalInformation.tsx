import { useFormContext } from 'react-hook-form'

export default function PersonalInformation() {

  const {register, formState: { errors }} = useFormContext();

  return (
    <form className='bg-white place-self-center py-12'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">Informations du client</h2>
          <p className="mt-4 text-md leading-6 text-gray-600 max-w-6xl">Afin que nous puissions vous identifier, créer votre dossier et entrer en contact 
          avec vous, nous avons besoin de récolter quelques informations personnelles.</p>

          <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="FIRST_NAME" className="block text-sm font-medium leading-6 text-gray-900">
                Prénom
              </label>
              <div className="mt-2">
                <input
                  {...register("FIRST_NAME", {required: true})}
                  type="text"
                  name="FIRST_NAME"
                  id="FIRST_NAME"
                  placeholder='Tapez votre prénom'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {errors.FIRST_NAME ? <p className="pt-2 text-red-500">Veuillez entrer votre prénom</p> : ""}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="LAST_NAME" className="block text-sm font-medium leading-6 text-gray-900">
                Nom
              </label>
              <div className="mt-2">
                <input
                  {...register("LAST_NAME", {required: true})}
                  type="text"
                  name="LAST_NAME"
                  id="LAST_NAME"
                  placeholder='Tapez votre nom'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {errors.LAST_NAME ? <p className="pt-2 text-red-500">Veuillez entrer votre nom de famille</p> : ""}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="EMAIL" className="block text-sm font-medium leading-6 text-gray-900">
                Courriel
              </label>
              <div className="mt-2">
                <input
                  {...register("EMAIL", {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                  id="EMAIL"
                  name="EMAIL"
                  type="EMAIL"
                  placeholder='Tapez votre adresse courriel'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {errors.EMAIL ? <p className="pt-2 text-red-500">Veuillez entrer un courriel valide ex: John.smith@gmail.com</p> : ""}
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="PHONE" className="block text-sm font-medium leading-6 text-gray-900">
                N° de téléphone
              </label>
              <div className="mt-2">
              <input
                  {...register("PHONE", {required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm})}
                  id="PHONE"
                  name="PHONE"
                  type="tel"
                  placeholder='Tapez votre numéro de téléphone'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {errors.PHONE ? <p className="pt-2 text-red-500">Veuillez entrer un téléphone valide</p> : ""}
            </div>

            <div className="col-span-full">
              <label htmlFor="ADDRESS" className="block text-sm font-medium leading-6 text-gray-900">
              Adresse
              </label>
              <div className="mt-2">
                <input
                  {...register("ADDRESS", {required: true})}
                  type="text"
                  name="ADDRESS"
                  id="ADDRESS"
                  placeholder='Tapez votre adresse'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {errors.ADDRESS ? <p className="pt-2 text-red-500">Veuillez entrer votre address</p> : ""}
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="CITY" className="block text-sm font-medium leading-6 text-gray-900">
                Ville
              </label>
              <div className="mt-2">
                <input
                  {...register("CITY", {required: true})}
                  type="text"
                  name="CITY"
                  id="CITY"
                  placeholder='Tapez votre ville'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {errors.CITY ? <p className="pt-2 text-red-500">Veuillez entrer votre ville</p> : ""}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="STATE" className="block text-sm font-medium leading-6 text-gray-900">
                Province
              </label>
              <div className="mt-2">
                <select
                {...register("STATE", {required: true})}
                id="STATE"
                name="STATE"
                defaultValue="QC"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                >
                  <option value="AB">AB</option>
                  <option value="BC">BC</option>
                  <option value="NL">NL</option>
                  <option value="PE">PE</option>
                  <option value="NS">NS</option>
                  <option value="NB">NB</option>
                  <option value="ON">ON</option>
                  <option value="MB">MB</option>
                  <option value="SK">SK</option>
                  <option value="YT">YT</option>
                  <option value="NT">NT</option>
                  <option value="QC">QC</option>
                  <option value="NU">NU</option>
                </select>
              </div>
              {errors.PROVINCE ? <p className="pt-2 text-red-500">Veuillez choisire une province</p> : ""}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="POSTAL_CODE" className="block text-sm font-medium leading-6 text-gray-900">
                Code postale
              </label>
              <div className="mt-2">
                <input
                  {...register("POSTAL_CODE", {required: true, pattern: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i })}
                  type="text"
                  name="POSTAL_CODE"
                  id="POSTAL_CODE"
                  placeholder='EX: H3M2X2'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
              {errors.POSTAL_CODE ? <p className="pt-2 text-red-500">Veuillez entrer un code postale valide.</p> : ""}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
