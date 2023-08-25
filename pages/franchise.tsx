import React from 'react'
import InstallationCTA from '@/components/Sections/InstalltionCTA'
import AboutQuote from '@/components/Sections/About/Quote'
import FranchiseFeatures from "@/components/Sections/Franchise/franchise-features";
import AboutCompanies from "@/components/Sections/About/AboutCompanies";
import HeadBlue from "@/components/ui/HeaderBlue";
import FranchiseForm from '@/components/Forms/FranchiseForm';

function about() {
  return (
    <>
      <HeadBlue title={"Franchise"} description={"Devenez un partenaire de choix, et déservez votre secteur."}/>
      <FranchiseFeatures/>
      <FranchiseForm /> 
    </> 
  )
}
export default about