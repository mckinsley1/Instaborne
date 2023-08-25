import { useState } from "react";
import useMultiStepForm from "../useMultiStepForm";
import styles from "./InstallationRequestForm.module.css";
import PersonalInformation from "./PersonalInformation";
import Greeting from "./Greeting";
import ComplementaryInformation from "./ComplementaryInformation";
import InstallationLocation from "./InstallationLocation";
import ScheduleInstallation from "./ScheduleInstallation";
import { useFormContext } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";
import FormComplete from "./FormComplete";
import axios from "axios";

function InstallationRequestForm(props: any) {
  
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const dealershipName = props.dealershipData[0]?.NAME;

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <Greeting key={1} name={props.dealershipData[0]?.NAME} logo_url={props.dealershipData[0]?.LOGO_URL}/>,
      <PersonalInformation key={2} />,
      <InstallationLocation key={3} />,
      <ComplementaryInformation key={4} employeesData={props.employeesData}/>,
      <ScheduleInstallation key={5} />,
      <FormComplete key={6} />
    ]);

  const { handleSubmit, reset } = useFormContext();

  const onSubmitNext = () => {
    next();
    window.scrollTo(0, 0)
  };

  const [sending, setSending] = useState(false);
  const [activeForm, setActiveForm] = useState(false);

  const onFinalSubmit = async (data: any) => {
    setSending(true)

    console.log('data', data);

    const { error } = await supabase
      .from("FORM_QUOTE")
      .insert(
        {
          FIRST_NAME: data.FIRST_NAME,
          LAST_NAME: data.LAST_NAME,
          EMAIL: data.EMAIL,
          PHONE: data.PHONE,
          ADDRESS: data.ADDRESS,
          CITY: data.CITY,
          POSTAL_CODE: data.POSTAL_CODE,
          STATE: data.STATE,
          CAR_BRAND: data.CAR_BRAND,
          CAR_MODEL: data.CAR_MODEL,
          CAR_YEAR: data.CAR_YEAR,
          BORNE_DELIVERY_DATE: data.BORNE_DELIVERY_DATE,
          BORNE_DELIVERY_COMPANY: data.BORNE_DELIVERY_COMPANY,
          REFERRER: data.REFERRER,
          PROMO_CODE: data.PROMO_CODE,
          HAS_BORNE: data.HAS_BORNE,
          INSTALLATION_ADDRESS_SAME: data.INSTALLATION_ADDRESS_SAME,
          INSTALLATION_ADDRESS: data.INSTALLATION_ADDRESS,
          INSTALLATION_CITY: data.INSTALLATION_CITY,
          INSTALLATION_DATE: data.INSTALLATION_DATE,
          INSTALLATION_MESSAGE: data.INSTALLATION_MESSAGE,
          INSTALLATION_POSTAL_CODE: data.INSTALLATION_POSTAL_CODE,
          INSTALLATION_STATE: data.INSTALLATION_STATE,
          INSTALLATION_BUILDING_TYPE: data.INSTALLATION_BUILDING_TYPE,
          ADDITIONNAL_NOTE: data.ADDITIONNAL_NOTE,
          SELLER: data.SELLER,
          STOCK_NUMBER: data.STOCK_NUMBER,
          VIN_NUMBER: data.VIN_NUMBER,
          SUBMISSION_NUMBER: Date.now()
        });

        let request = {
          FIRST_NAME: data.FIRST_NAME,
          LAST_NAME: data.LAST_NAME,
          EMAIL: data.EMAIL,
          PHONE: data.PHONE,
          ADDRESS: data.ADDRESS,
          CITY: data.CITY,
          POSTAL_CODE: data.POSTAL_CODE,
          STATE: data.STATE,
          CAR_BRAND: data.CAR_BRAND,
          CAR_MODEL: data.CAR_MODEL,
          CAR_YEAR: data.CAR_YEAR,
          BORNE_DELIVERY_DATE: data.BORNE_DELIVERY_DATE,
          BORNE_DELIVERY_COMPANY: data.BORNE_DELIVERY_COMPANY,
          PROMO_CODE: data.PROMO_CODE,
          REFERRER: data.REFERRER,
          HAS_BORNE: data.HAS_BORNE,
          INSTALLATION_ADDRESS_SAME: data.INSTALLATION_ADDRESS_SAME,
          INSTALLATION_ADDRESS: data.INSTALLATION_ADDRESS,
          INSTALLATION_CITY: data.INSTALLATION_CITY,
          INSTALLATION_DATE: data.INSTALLATION_DATE,
          INSTALLATION_MESSAGE: data.INSTALLATION_MESSAGE,
          INSTALLATION_POSTAL_CODE: data.INSTALLATION_POSTAL_CODE,
          INSTALLATION_STATE: data.INSTALLATION_STATE,
          INSTALLATION_BUILDING_TYPE: data.INSTALLATION_BUILDING_TYPE,
          ADDITIONNAL_NOTE: data.ADDITIONNAL_NOTE,
          SELLER: data.SELLER,
          STOCK_NUMBER: data.STOCK_NUMBER,
          VIN_NUMBER: data.VIN_NUMBER,
          SUBMISSION_NUMBER: Date.now()
        }

        axios.post('/api/sendInstallationRequestForm', request)
          .then(response => {
             //console.log(response.data); 
          })

          .catch(error => {
              if(error){
                  //console.log(error);
              }
          })
    setSending(false)
    
    if (!error) {
      next();
      reset();
    } else if (error) {
      alert(error.message)
    }
  };

  const ConfirmButton = () => {
    return ( sending ? 
      <button disabled type="button" className="text-white bg-primary focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-primary dark:hover:bg-secondary/50 inline-flex items-center">
        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
        </svg>
        En cours...
      </button>
    :
    <button
        onClick={handleSubmit(onFinalSubmit)}
        type="submit"
        className={styles.btn}
      >
        Confirmer et terminer
      </button>
    )
  }

  return (
    <div className="bg-white place-items-center place-content-center place-self-center align-middle px-8 pt-20">
      
      <div className="max-w-6xl mx-auto">
        {currentStepIndex == 0 ? (
          ""
        ) : (
          <>
            {(!isLastStep) 
            ? <div className="text-black">
                Étape {currentStepIndex} / {steps.length - 2}
              </div>
            :
            ""
            }
          </>
        )}
        <div className="place-self-center">{step}</div>

        <div className="flex justify-between pt-4">
          {isLastStep ? "" 
          :
            <>
              {!isFirstStep && (
                <button type="button" id="btnFormPrevious" onClick={back} className={styles.btn}>
                  Précédent
                </button>
              )}
               {currentStepIndex == (steps.length - 2) ? (
                  <ConfirmButton />
                ) : !isFirstStep && !(currentStepIndex == 4) ? (
                  <button
                    id="btnFormNext"
                    type="submit"
                    onClick={handleSubmit(onSubmitNext)}
                    className={styles.btn}
                  >
                    Suivant
                  </button>
                ) : isFirstStep && (
                  <div>
                  <div className="flex items-center pb-10">
                  <input
                    id={"consent"}
                    name="consent"
                    type="checkBox"
                    onChange={(e)=> setActiveForm(e.target.checked)}
                  
                    className="h-4 w-4 border-gray-300 rounded text-teal-600 focus:ring-teal-600 my-10"
                  />
                  <label className="ml-3 block text-sm max-w-4xl font-medium leading-6 text-gray-400">
                    {!dealershipName 

                    ?<p>En remplissant ce formulaire vous nous donnez votre accord pour que nous partageons vos informations avec nos partenaires afin de cibler vos besoins pour l’installation de la borne électrique.</p>
                    : <div><p><span className="text-lg text-red-400 text-lg">Veuillez obtenir l'accord verbal de votre client. </span></p><p>Nous vous demandons votre accord verbal pour que nous puissions partager vos informations avec nos partenaires, afin qu'ils puissent vous contacter pour cibler vos besoins pour l’installation de la borne électrique.</p> </div>
                    
                    }
           
                  </label>
                </div>

                  <button onClick={next} type="button" id="btnFormStart" className={`rounded-md ${activeForm ? 'bg-[#02B5A1] hover:bg-[#02B5A1]/70' : 'bg-gray-400' } py-2.5 px-3.5 text-sm font-semibold
                  text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600`}    disabled={!activeForm}>
                    Commencer
                  </button>
                  </div>
                )}
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default InstallationRequestForm;