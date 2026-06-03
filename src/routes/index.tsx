import AboutUs from '#/components/landingpage/AboutUs'
import CustomerProject from '#/components/landingpage/CustomerProject'
import FAQSection from '#/components/landingpage/FAQSection'
import Hero from '#/components/landingpage/Hero'
import InnovativeProducts from '#/components/landingpage/InnovativeProducts'
import Services from '#/components/landingpage/Services'
import StatsSection from '#/components/landingpage/StatsSection'
import TeamSection from '#/components/landingpage/TeamSection'
import TestimonialSection from '#/components/landingpage/TestimonialSection'
import TrainingSection from '#/components/landingpage/TrainingSection'
import WhyChooseUs from '#/components/services/WhyChooseUs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="">
      <div>
      <Hero/>
      <StatsSection />
      <WhyChooseUs />
      <AboutUs />
      <Services />
      <TrainingSection />
      <CustomerProject />
      <InnovativeProducts />
      <TeamSection />
      <TestimonialSection />
      <FAQSection />
    </div>
    </div>
  )
}
