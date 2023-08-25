import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import carsList from "../../../data/ev-data.json";
import _ from "lodash";
import { uniq } from "lodash";
import "react-datepicker/dist/react-datepicker.css";

export default function ComplementaryInformation({ employeesData }: any) {
	const {
		register,
		formState: { errors },
		control,
	} = useFormContext();

	const modelsJson = JSON.stringify(
		uniq(carsList.data.map((car) => car.brand))
	);
	const carBrands = [...JSON.parse(modelsJson)];

	const [selectedCarBrand, setSelectedCarBrand] = useState(carBrands[0]);
	const [selectedBrandModels, setSelectedBrandModels] = useState<string[]>(
		uniq(
			carsList.data
				.filter((car) => car.brand === selectedCarBrand)
				.map((car, i) => car.model)
		)
	);

	const [directors, setDirectors] = useState<any>([]);
	const [sellers, setSellers] = useState<any>([]);
	const [showComissionSection, setShowComissionSection] = useState(false);

	useEffect(() => {
		if (!_.isEmpty(employeesData)) {
			setShowComissionSection(true);
			setSellers(
				employeesData.filter((employee: any) => employee.EMPLOYEE_TYPE === "Agent").map((employee: any) => `${employee.FIRST_NAME} ${employee.LAST_NAME}`)
			);
			
			setDirectors(
				employeesData.filter((employee: any) => employee.EMPLOYEE_TYPE === "Director").map((employee: any) => `${employee.FIRST_NAME} ${employee.LAST_NAME}`)
			);
		}
	});

	return (
		<form className="py-12">
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-3xl font-semibold leading-7 text-gray-900 items-stretch">
						Informations complémentaires
					</h2>
					<p className="mt-4 text-md leading-6 text-gray-600 max-w-6xl invisible">
						Afin que nous puissions vous identifier, créer votre dossier et
						entrer en contact avec vous, nous avons besoin de récolter quelques
						informations personnelles.
					</p>

					<div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
						<div className="sm:col-span-2">
							<label
								htmlFor="CAR_BRAND"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Marque du véhicule
							</label>
							<div className="mt-2">
								<select
									{...register("CAR_BRAND", { required: true })}
									id="CAR_BRAND"
									name="CAR_BRAND"
									onChange={(event) => {
										setSelectedCarBrand(event.target.value);
										setSelectedBrandModels(
											uniq(
												carsList.data
													.filter((car) => car.brand === event.target.value)
													.map((car, i) => car.model)
											)
										);
									}}
									className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
								>
									{carBrands.map((brand, i) => (
										<option key={i} value={brand}>
											{brand}
										</option>
									))}
								</select>
							</div>
							{errors.CAR_BRAND ? (
								<p className="pt-2 text-red-500">
									Veuillez choisir la marque du véhicule
								</p>
							) : (
								""
							)}
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="CAR_MODEL"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Modele du véhicule
							</label>
							<div className="mt-2">
								<select
									{...register("CAR_MODEL", { required: true })}
									id="CAR_MODEL"
									name="CAR_MODEL"
									className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
								>
									{selectedBrandModels.map((model, i) => (
										<option key={i} value={model}>
											{model}
										</option>
									))}
								</select>
							</div>
							{errors.CAR_MODEL ? (
								<p className="pt-2 text-red-500">
									Veuillez choisir le modèle du véhicule
								</p>
							) : (
								""
							)}
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="CAR_YEAR"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Année du véhicule
							</label>
							<div className="mt-2">
								<input
									{...register("CAR_YEAR", { required: true })}
									type="text"
									name="CAR_YEAR"
									id="CAR_YEAR"
									autoComplete="family-name"
									placeholder="Tapez l'année du véhicule"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
								/>
							</div>
							{errors.CAR_YEAR ? (
								<p className="pt-2 text-red-500">
									Veuillez entrer l'année du véhicule
								</p>
							) : (
								""
							)}
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="STOCK_NUMBER"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								N° de stock
							</label>
							<div className="mt-2">
								<input
									{...register("STOCK_NUMBER", { required: true })}
									type="text"
									name="STOCK_NUMBER"
									id="STOCK_NUMBER"
									placeholder="Tapez le numéro de stock"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
								/>
							</div>
							{errors.STOCK_NUMBER ? (
								<p className="pt-2 text-red-500">
									Veuillez entrer un N° de stock
								</p>
							) : (
								""
							)}
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="VIN_NUMBER"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								N° de VIN
							</label>
							<div className="mt-2">
								<input
									{...register("VIN_NUMBER", { maxLength: 17, required: true })}
									type="text"
									name="VIN_NUMBER"
									id="VIN_NUMBER"
									autoComplete="family-name"
									placeholder="Tapez le numéro de VIN"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
								/>
							</div>
							{errors.VIN_NUMBER ? (
								<p className="pt-2 text-red-500">
									Veuillez entrer un N° de VIN
								</p>
							) : (
								""
							)}
						</div>

						<div className="sm:col-span-6">
							<label
								htmlFor="HAS_BORNE"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Êtes-vous en possession de borne de recharge ?
							</label>
							<div className="mt-2">
								<div>
									<div className="col-span-6 ">
										<div className="flex gap-6">
											<div className="flex w-full items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
												<input
													{...register("HAS_BORNE", { required: true })}
													id="HAS_BORNE_RADIO_1"
													type="radio"
													value="true"
													name="HAS_BORNE"
													className="w-4 h-4 text-[#02B5A1] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-[#02B5A1] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label
													htmlFor="HAS_BORNE_RADIO_1"
													className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													Oui
												</label>
											</div>
											<div className="flex w-full items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
												<input
													{...register("HAS_BORNE", { required: true })}
													id="HAS_BORNE_RADIO_2"
													type="radio"
													value="false"
													name="HAS_BORNE"
													className="w-4 h-4 text-[#02B5A1] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-[#02B5A1] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
												/>
												<label
													htmlFor="HAS_BORNE_RADIO_2"
													className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													Non
												</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							{errors.HAS_BORNE ? (
								<p className="pt-2 text-red-500">Veuillez choisir une option</p>
							) : (
								""
							)}
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="BORNE_DELIVERY_COMPANY"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Vous attendez une borne de :
							</label>
							<div className="mt-2">
								<input
									{...register("BORNE_DELIVERY_COMPANY")}
									id="BORNE_DELIVERY_COMPANY"
									name="BORNE_DELIVERY_COMPANY"
									placeholder="Tapez le nom de la compagnie"
									className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 placeholder:text-gray-400 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
								></input>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="BORNE_DELIVERY_DATE"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Date de livraison du véchicule
							</label>
							<div className="mt-2">
								<Controller
									control={control}
									name="BORNE_DELIVERY_DATE"
									rules={{ required: true }}
									render={({ field: { onChange, onBlur, value, ref } }) => (
										<DatePicker
											onChange={onChange}
											onBlur={onBlur}
											selected={value}
											value={value}
											minDate={new Date()}
											popperPlacement="bottom"									
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
										/>
									)}
								/>
							</div>
							{errors.BORNE_DELIVERY_DATE ? (
								<p className="pt-2 text-red-500">
									Veuillez choisir une date de livraison
								</p>
							) : (
								""
							)}
						</div>

						{showComissionSection ? (
							<>
								<div className="sm:col-span-3 sm:col-start-1">
									<label
										htmlFor="REFERRER"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Directeur de finances
									</label>
									<div className="mt-2">
										<select
											{...register("REFERRER", { required: true })}
											id="REFERRER"
											name="REFERRER"
											className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
										>
											{directors.map((director: any, i: number) => (
												<option
													key={i}
													value={director}
												>{director}</option>
											))}
										</select>
									</div>

									{errors.REFERRER ? (
										<p className="pt-2 text-red-500">
											Veuillez entrer le directeur de finances
										</p>
									) : (
										""
									)}
								</div>
								<div className="sm:col-span-3">
									<label
										htmlFor="SELLER"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Vendeur
									</label>
									<div className="mt-2">
										<select
											{...register("SELLER", { required: true })}
											id="SELLER"
											name="SELLER"
											className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
										>
											{sellers.map((seller: any, i: number) => (
												<option
													key={i}
													value={seller}
												>{seller}</option>
											))}
										</select>
									</div>
									{errors.SELLER ? (
										<p className="pt-2 text-red-500">
											Veuillez entrer le vendeur
										</p>
									) : (
										""
									)}
								</div>
							</>
						) : (
							<>
								<div className="sm:col-span-6">
									<label
										htmlFor="REFERRER"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Réference
									</label>
									<div className="mt-2">
										<input
											{...register("REFERRER")}
											name="REFERRER"
											id="REFERRER"
											placeholder="Tapez le nom de votre réference"
											className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary px-2 sm:py-1.5 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
								</div>

								<div className="sm:col-span-6">
									<label
										htmlFor="PROMO_CODE"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Code promotionel
									</label>
									<div className="mt-2">
										<input
											{...register("PROMO_CODE")}
											name="PROMO_CODE"
											id="PROMO_CODE"
											placeholder="Tapez votre code promotionel"
											className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary px-2 sm:py-1.5 sm:text-sm sm:leading-6"
											defaultValue={""}
										/>
									</div>
								</div>
							</>
						)}

						<div className="sm:col-span-6">
							<label
								htmlFor="ADDITIONNAL_NOTE"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Avez-vous un message à nous transmettre concernant les
								informations complémentaires ?
							</label>
							<div className="mt-2">
								<textarea
									{...register("ADDITIONNAL_NOTE")}
									rows={4}
									name="ADDITIONNAL_NOTE"
									id="ADDITIONNAL_NOTE"
									placeholder="Tapez votre message"
									className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:py-1.5 sm:text-sm sm:leading-6"
									defaultValue={""}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}
