import React, { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { createClient } from '@supabase/supabase-js';
import {capitalize} from 'lodash';

function ScheduleInstallation() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const {control, getValues, watch, setValue, formState: {errors}} = useFormContext();

  const [formValues, setFormValues] = useState(Object)

  const [excludedTimes, setExcludedTimes] = useState<any>([])

  const tommorow = () => {
    let date = new Date()
    date.setDate(date.getDate() + 1)
    return date
  }

  const defaultExcludedTimes = [
    new Date(0,0,0),
    new Date(0, 0, 0, 2),
    new Date(0, 0, 0, 4),
    new Date(0, 0, 0, 6),
    new Date(0, 0, 0, 20),
    new Date(0, 0, 0, 22),
  ]

  const fridayDefaultExcludedTimes = [
    new Date(0,0,0),
    new Date(0, 0, 0, 2),
    new Date(0, 0, 0, 4),
    new Date(0, 0, 0, 6),
    new Date(0, 0, 0, 18),
    new Date(0, 0, 0, 20),
    new Date(0, 0, 0, 22),
  ]

  const saturdayDefaultExcludedTimes = [
    new Date(0,0,0),
    new Date(0, 0, 0, 2),
    new Date(0, 0, 0, 4),
    new Date(0, 0, 0, 6),
    new Date(0, 0, 0, 14),
    new Date(0, 0, 0, 16),
    new Date(0, 0, 0, 18),
    new Date(0, 0, 0, 20),
    new Date(0, 0, 0, 22),
  ]

  async function checkAvailableDates(currentlySelectedDate: any) {
    let { data: INSTALLATION_DATES, error } = await supabase
    .from('FORM_QUOTE')
    .select('INSTALLATION_DATE')

    const daysWithBookings = INSTALLATION_DATES?.filter((date) => new Date(date.INSTALLATION_DATE).toLocaleDateString() === new Date(currentlySelectedDate).toLocaleDateString())
    const excluTimes: any = daysWithBookings?.map((date) => new Date(date.INSTALLATION_DATE).getTime())

    // if selected date is a friday
    if (currentlySelectedDate.getDay() === 5) {
      setExcludedTimes([...fridayDefaultExcludedTimes, ...excluTimes])
    } else if (currentlySelectedDate.getDay() === 6) { // if selected date is a saturday
      setExcludedTimes([...saturdayDefaultExcludedTimes, ...excluTimes])
    } else setExcludedTimes([...defaultExcludedTimes, ...excluTimes]) // any other day of the week
    
  }

  useEffect(() => {
    setFormValues(getValues())
    setValue('INSTALLATION_DATE', tommorow())
  }, [])

  useEffect(() => {
    checkAvailableDates(watch('INSTALLATION_DATE'))
  }, [watch('INSTALLATION_DATE')])  

  return (
    <div className='py-12 gap-4'>
       <div className='sm:col-span-6'>
          <h1 className='text-3xl font-semibold leading-7 text-gray-900'>Programmez votre rendez-vous</h1>
          <p className='mt-4 text-md leading-6 text-gray-600 max-w-7xl'>Il ne vous reste plus qu'a programmer l'heure et la date à laquelle vous souhaitez que notre expert vous rencontre pour estimer et évaluer 
          votre future installation.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-6'>
        <div className='col-span-2 mt-12'>
          <p className='text-sm font-bold py-2'>Sélectionnez le jour du rendez-vous</p>
          <Controller
              control={control}
              name="INSTALLATION_DATE"
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                  <DatePicker
                      adjustDateOnChange
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}  
                      showTimeSelect
                      minDate={tommorow()}
                      inline
                      timeIntervals={120}
                      filterDate={(date) => date.getDay() !== 0}
                      excludeTimes={excludedTimes}
                      calendarClassName='drop-shadow-lg'
                  />
              )}
            />
            {errors.INSTALLATION_DATE ? <p className="pt-2 text-red-500">Veuillez choisir une date d'installation </p> : ""}
        </div>
        <div className='col-span-4 pt-20'>
          <h2 className='text-lg text-black font-bold mb-3'>Récapitulatif</h2>
          <a href="#" className="block w-full p-6 bg-[#E6F8F166]/40 border border-[#20D0BD] rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white leading-3">Votre prochain rendez-vous</h5>
            <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{watch('INSTALLATION_DATE') == null ? "" : capitalize(new Date(watch('INSTALLATION_DATE')).toLocaleDateString('fr-CA', {dateStyle: 'full'}))}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Notre expert Instaborne viendra faire une estimation 
  sur le lieu d'installation suivant :</p>
            <p>{(formValues.INSTALLATION_ADDRESS_SAME === "true") ? `${formValues.ADDRESS}, ${formValues.CITY}, ${formValues.STATE}, ${formValues.POSTAL_CODE}` 
                : `${formValues.INSTALLATION_ADDRESS}, ${formValues.INSTALLATION_CITY}, ${formValues.INSTALLATION_STATE}, ${formValues.INSTALLATION_POSTAL_CODE}`}</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ScheduleInstallation