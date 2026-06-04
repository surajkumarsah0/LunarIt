import AboutCTA from '#/components/about/AboutCTA'
import AboutHero from '#/components/about/AboutHero'
import CompanyStats from '#/components/about/CompanyStats'
import CoreValues from '#/components/about/CoreValues'
import MissionVision from '#/components/about/MissionVision'
import MissionVisionCore from '#/components/about/MissionVisionCore'
import WhoWeAre from '#/components/about/WhoWeAre'
import WhyTrustUs from '#/components/about/WhyTrustUs'
import WorkCulture from '#/components/about/WorkCulture'
import TeamSection from '#/components/landingpage/TeamSection'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
 
      <AboutHero />
      <WhoWeAre />
     <MissionVisionCore/>
      <CompanyStats />
      <WhyTrustUs />
      <WorkCulture />
      <TeamSection />
      <AboutCTA />
    </div>
  )
}
