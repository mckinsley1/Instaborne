import Image from "next/image";
import React, { useEffect, useState } from "react";

function Greeting({ logo_url, name }: any) {
	const [clientName, setClientName] = useState<any>("");
	const [clientLogo, setClientLogo] = useState<any>("");

	useEffect(() => {
		if (name != undefined && logo_url != undefined) {
			setClientName(name);
			setClientLogo(logo_url);
		}
	}, []);

	return (
		<div className="pt-24">
	
			<div className="inline-flex gap-7">
				<Image src="/logodark.svg" width={400} height={300} alt="" />
				{clientLogo ? (
					<img src={clientLogo} width={300} height={200} alt="" />
				) : (
					""
				)}
			</div>
			<p className="text-black pt-12 text-2xl">
				Les experts dans le service d'installation de borne de recharge pour
				votre véhicule électrique. Pour une{" "}
				<span className="font-bold">ESTIMATION GRATUITE</span>, nous vous prions
				de remplir notre formulaire en ligne en 4 étapes rapides.
			</p>

		</div>
	);
}

export default Greeting;
