import React from 'react'
import InstallationCTA from '@/components/Sections/InstalltionCTA'
import AboutQuote from '@/components/Sections/About/Quote'
import PrFeAbout from "@/components/Sections/About/product-features";
import AboutCompanies from "@/components/Sections/About/AboutCompanies";
import HeadBlue from "@/components/ui/HeaderBlue";
import ContactForm from '@/components/Forms/ContactForm';

function about() {
  return (
    <>
      <HeadBlue title={"À propos"} description={"Un partenaire de choix  pour vos installations"}/>
      <AboutQuote />
      <PrFeAbout/>
      <ContactForm /> 
      <AboutCompanies/>
      <InstallationCTA />
    </> 
  )
}
export default about