import HomeHero from '@/components/Heroes/HomeHero'
import InstallationTypesSection from '@/components/Sections/InstallationTypesSection'
import InstallationCTA from '@/components/Sections/InstalltionCTA'
import ServicesCTA from '@/components/Sections/ServicesCTA'
import FaqCard from '@/components/Cards/FaqCard'
import PricingCard from '@/components/Cards/PricingCard'
import AboutCompanies from '@/components/Sections/About/AboutCompanies'
import CompaniesThatTrustUs from '@/components/Sections/CompaniesThatTrustUs'

export default function Home() {
  return (
    <>
      <HomeHero/>
      <CompaniesThatTrustUs />
      <InstallationTypesSection />
      <AboutCompanies/>
      <PricingCard />
      <InstallationCTA />
      <ServicesCTA />
      <FaqCard />
    </>
  )
}
