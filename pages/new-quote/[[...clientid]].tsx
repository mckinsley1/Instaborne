import InstallationRequestForm from "@/components/Forms/InstallationRequestForm/InstallationRequestForm";
import { createClient } from "@supabase/supabase-js";
import React, { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import _ from "lodash";

interface Props {
	children: ReactNode;
}

function FormGlobalContext({ children }: Props) {
	const methods = useForm();

	return <FormProvider {...methods}>{children}</FormProvider>;
}

function NewQuote({ employeesData, dealerData }: any) {
	return (
		<div className="pb-12 bg-white min-h-screen flex justify-center">
			<FormGlobalContext>
				<InstallationRequestForm
					dealershipData={dealerData}
					employeesData={employeesData}
				/>
			</FormGlobalContext>
		</div>
	);
}

export async function getServerSideProps({ params }: any) {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	let dealerData: any = [];
	let employeesData: any = {};

	if (!_.isEmpty(params.clientid)) {
		let { data: DEALERSHIPS } = await supabase
			.from("DEALERSHIPS")
			.select("*")
			.eq("NAME_SLUG", params.clientid);

		dealerData = DEALERSHIPS;

		let { data: DEALERSHIP_EMPLOYEES, error } = await supabase
			.from("DEALERSHIP_EMPLOYEES")
			.select("*")
			.eq("DEALERSHIP_ID", dealerData[0]?.DEALERSHIP_ID);

		employeesData = DEALERSHIP_EMPLOYEES;
	}

	return {
		props: {
			dealerData,
			employeesData,
		},
	};
}

export default NewQuote;
