import FAQSection from '#/components/landingpage/FAQSection'
import TestimonialSection from '#/components/landingpage/TestimonialSection'
import CareerSupport from '#/components/training/CareerSupport'
import EnrollmentProcess from '#/components/training/EnrollmentProcess'
import InternshipProgram from '#/components/training/InternshipProgram'
import LearningJourney from '#/components/training/LearningJourney'
import StudentProjects from '#/components/training/StudentProjects'
import TrainingCTA from '#/components/training/TrainingCTA'
import TrainingHero from '#/components/training/TrainingHero'
import TrainingPrograms from '#/components/training/TrainingPrograms'
import WhyLearnWithUs from '#/components/training/WhyLearnWithUs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/training')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <TrainingHero />
      <WhyLearnWithUs />
      <LearningJourney />
      <TrainingPrograms />
      <InternshipProgram />
      <EnrollmentProcess />
      <StudentProjects />
      <CareerSupport />
      <TestimonialSection />
      <FAQSection />
      <TrainingCTA />
    </div>
  )
}
