import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

function InstallationLocation() {
	const {
		register,
		getValues,
		formState: { errors },
		clearErrors,
	} = useFormContext();

	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [province, setProvince] = useState("");
	const [isSameAddress, setIsSameAddress] = useState(true);

	useEffect(() => {
		if (isSameAddress) {
			clearErrors;
		}
	}, [isSameAddress]);

	return (
		<div className="py-12">
			<div className="space-y-12">
				<div className="sm:col-span-6">
					<h1 className="text-3xl font-semibold leading-7 text-gray-900">
						Lieu de votre installation
					</h1>
					<p className="mt-4 text-md leading-6 text-gray-600 max-w-6xl">
						Afin que nous puissions évaluer les normes applicables liées a votre
						structure et environnement nous avons besoins d’informations sur le
						dans lequel votre borne sera installée.
					</p>
				</div>
				<div className="border-b border-gray-900/10 pb-12 space-y-6">
					<div className="sm:col-span-6 w-full">
						<div className="sm:col-span-1 pt-10">
							<ul className="w-full gap-6 grid sm:grid-cols-4">
								<li>
									<input
										{...register("INSTALLATION_BUILDING_TYPE", {
											required: true,
										})}
										type="radio"
										id="INSTALLATION_BUILDING_HOME"
										name="INSTALLATION_BUILDING_TYPE"
										value="home"
										className="hidden peer"
									/>
									<label
										htmlFor="INSTALLATION_BUILDING_HOME"
										className="flex flex-col text-center items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#02B5A1] peer-checked:text-[#02B5A1] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
									>
										<img src="/homeIcon.svg" />
										<div className="w-full text-lg font-semibold text-center">
											Maison
										</div>
									</label>
								</li>
								<li>
									<input
										{...register("INSTALLATION_BUILDING_TYPE", {
											required: true,
										})}
										type="radio"
										id="INSTALLATION_BUILDING_COPROPRETY"
										name="INSTALLATION_BUILDING_TYPE"
										value="coproprety"
										className="hidden peer"
									/>
									<label
										htmlFor="INSTALLATION_BUILDING_COPROPRETY"
										className="flex flex-col text-center items-center justify-between w-full p-5 aria-required:border-red-200 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#02B5A1] peer-checked:text-[#02B5A1] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
									>
										<img src="/coproprieteIcon.svg" />
										<div className="w-full text-lg font-semibold text-center">
											Copropriété
										</div>
									</label>
								</li>
								<li>
									<input
										{...register("INSTALLATION_BUILDING_TYPE", {
											required: true,
										})}
										type="radio"
										id="INSTALLATION_BUILDING_ENTEPRISE"
										name="INSTALLATION_BUILDING_TYPE"
										value="enteprise"
										className="hidden peer"
									/>
									<label
										htmlFor="INSTALLATION_BUILDING_ENTEPRISE"
										className="flex flex-col text-center items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#02B5A1] peer-checked:text-[#02B5A1] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
									>
										<img src="/entrepriseIcon.svg" />
										<div className="w-full text-lg font-semibold text-center">
											Entreprise
										</div>
									</label>
								</li>
								<li>
									<input
										{...register("INSTALLATION_BUILDING_TYPE", {
											required: true,
										})}
										type="radio"
										id="INSTALLATION_BUILDING_OTHER"
										name="INSTALLATION_BUILDING_TYPE"
										value="other"
										className="hidden peer"
									/>
									<label
										htmlFor="INSTALLATION_BUILDING_OTHER"
										className="flex flex-col text-center items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#02B5A1] peer-checked:text-[#02B5A1] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
									>
										<img src="/autreIcon.svg" />
										<div className="w-full text-lg font-semibold text-center">
											Autre
										</div>
									</label>
								</li>
							</ul>
							{errors.INSTALLATION_BUILDING_TYPE ? (
								<p className="pt-2 text-red-500">
									Veuillez choisir un type d'installation
								</p>
							) : (
								""
							)}
						</div>
					</div>

					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 ">
							<h1 className="text-sm text-black py-4">
								Quelle est l'adresse ou sera effectuer l'installation ?
							</h1>
							<div className="flex gap-6">
								<div className="flex w-full items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
									<input
										{...register("INSTALLATION_ADDRESS_SAME", { required: true })}
										onChange={() => {
											setIsSameAddress(true);
											clearErrors();
										}}
										id="INSTALLATION_ADDRESS_RADIO_1"
										type="radio"
										value="true"
										name="INSTALLATION_ADDRESS_SAME"
										className="w-4 h-4 text-[#02B5A1] bg-gray-100 border-gray-300 focus:ring-[#02B5A1] dark:focus:ring-[#02B5A1] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										htmlFor="INSTALLATION_ADDRESS_RADIO_1"
										className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Même adresse
									</label>
								</div>
								<div className="flex w-full items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
									<input
										{...register("INSTALLATION_ADDRESS_SAME", { required: true })}
										onChange={() => setIsSameAddress(false)}
										id="INSTALLATION_ADDRESS_RADIO_2"
										type="radio"
										value="false"
										name="INSTALLATION_ADDRESS_SAME"
										className="w-4 h-4 text-[#02B5A1] bg-gray-100 border-gray-300 focus:ring-[#02B5A1] dark:focus:ring-[#02B5A1] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										htmlFor="INSTALLATION_ADDRESS_RADIO_2"
										className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Addresse differente
									</label>
								</div>
							</div>
							{errors.INSTALLATION_ADDRESS_SAME ? (
								<p className="pt-2 text-red-500">Veuillez choisir une option</p>
							) : (
								""
							)}
						</div>

						<div className="col-span-6">
							<label
								htmlFor="INSTALLATION_ADDRESS"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Adresse
							</label>
							<div className="mt-2">
								<input
									{...register("INSTALLATION_ADDRESS", {
										required: !isSameAddress,
									})}
									type="text"
									name="INSTALLATION_ADDRESS"
									id="INSTALLATION_ADDRESS"
									placeholder="Tapez l’adresse de votre lieu d’installation"
									value={isSameAddress ? getValues("ADDRESS") : address}
									onChange={(e) => setAddress(e.currentTarget.value)}
									disabled={isSameAddress}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 disabled:bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
								/>
							</div>
							{errors.INSTALLATION_ADDRESS ? (
								<p className="pt-2 text-red-500">
									Veuillez entrer une address valide
								</p>
							) : (
								""
							)}
						</div>

						<div className="col-span-2">
							<label
								htmlFor="INSTALLATION_CITY"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Ville
							</label>
							<div className="mt-2">
								<input
									{...register("INSTALLATION_CITY", {
										required: !isSameAddress,
									})}
									type="text"
									name="INSTALLATION_CITY"
									id="INSTALLATION_CITY"
									placeholder="Tapez la ville"
									value={isSameAddress ? getValues("CITY") : city}
									onChange={(e) => setCity(e.currentTarget.value)}
									disabled={isSameAddress}
									className="block w-full rounded-md border-0 py-1.5 disabled:bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
								/>
							</div>
							{errors.INSTALLATION_CITY ? (
								<p className="pt-2 text-red-500">
									Veuillez entrer une ville valide
								</p>
							) : (
								""
							)}
						</div>

						<div className="col-span-2">
							<label
								htmlFor="INSTALLATION_STATE"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Province
							</label>
							<div className="mt-2">
								<select
									{...register("INSTALLATION_STATE", {
										required: !isSameAddress,
									})}
									id="INSTALLATION_STATE"
									name="INSTALLATION_STATE"
									value={isSameAddress ? getValues("STATE") : province}
									onChange={(e) => setProvince(e.currentTarget.value)}
									disabled={isSameAddress}
									defaultValue="QC"
									className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 disabled:bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
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
						</div>

						<div className="col-span-2">
							<label
								htmlFor="INSTALLATION_POSTAL_CODE"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Code postal
							</label>
							<div className="mt-2">
								<input
									{...register("INSTALLATION_POSTAL_CODE", {
										required: !isSameAddress,
										pattern:
											/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
									})}
									type="text"
									name="INSTALLATION_POSTAL_CODE"
									id="INSTALLATION_POSTAL_CODE"
									placeholder="Tapez le code postal"
									value={isSameAddress ? getValues("POSTAL_CODE") : postalCode}
									onChange={(e) => setPostalCode(e.currentTarget.value)}
									disabled={isSameAddress}
									className="block w-full rounded-md border-0 py-1.5 disabled:bg-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
								/>
							</div>
							{errors.INSTALLATION_POSTAL_CODE ? (
								<p className="pt-2 text-red-500">
									Veuillez entrer un code postal valide
								</p>
							) : (
								""
							)}
						</div>

						<div className="col-span-6">
							<label
								htmlFor="INSTALLATION_MESSAGE"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Avez-vous un message à nous transmettre concernant le lieu
								d'installation ?
							</label>
							<div className="mt-2">
								<textarea
									{...register("INSTALLATION_MESSAGE")}
									name="INSTALLATION_MESSAGE"
									id="INSTALLATION_MESSAGE"
									rows={4}
									placeholder="Tapez votre message"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InstallationLocation;
