import FAQSection from '#/components/landingpage/FAQSection'
import TestimonialSection from '#/components/landingpage/TestimonialSection'
import EnrollmentProcess from '#/components/training/EnrollmentProcess'
import LearningJourney from '#/components/training/LearningJourney'
import TrainingHero from '#/components/training/TrainingHero'
import TrainingPrograms from '#/components/training/TrainingPrograms'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/training')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <TrainingHero />
      <TrainingPrograms />
      <LearningJourney />
      {/* <EnrollmentProcess /> */}
      <TestimonialSection />
      <FAQSection />
    </div>
  )
}
