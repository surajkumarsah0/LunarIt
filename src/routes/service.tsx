import DevelopmentProcess from '#/components/services/DevelopmentProcess'
import IndustriesSection from '#/components/services/IndustriesSection'
import ServicesHero from '#/components/services/ServiceHero'
import ServicesCTA from '#/components/services/ServicesCTA'
import ServicesGrid from '#/components/services/ServicesGrid'
import TechnologyStack from '#/components/services/TechnologyStack'
import TrainingPrograms from '#/components/services/TrainingPrograms'
import WhyChooseUs from '#/components/services/WhyChooseUs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/service')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <ServicesHero />
      <ServicesGrid />
      <DevelopmentProcess />
      <TrainingPrograms />
      <TechnologyStack />
      <IndustriesSection />
    </div>
  )
}
