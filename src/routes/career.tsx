import CareerCTA from '#/components/careers/CareerCTA'
import CareerFAQ from '#/components/careers/CareerFAQ'
import CareerHero from '#/components/careers/CareerHero'
import EmployeeBenefits from '#/components/careers/EmployeeBenefits'
import HiringProcess from '#/components/careers/HiringProcess'
import InternshipOpportunities from '#/components/careers/InternshipOpportunities'
import LifeAtLunar from '#/components/careers/LifeAtLunar'
import OpenPositions from '#/components/careers/OpenPositions'
import WhyWorkWithUs from '#/components/careers/WhyWorkWithUs'
import WorkCulture from '#/components/careers/WorkCulture'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <CareerHero />
      <WhyWorkWithUs />
      <LifeAtLunar />
      <OpenPositions />
      <InternshipOpportunities />
      <HiringProcess />
      <EmployeeBenefits />
      <WorkCulture />
      <CareerFAQ />
      <CareerCTA />
    </div>
  )
}
