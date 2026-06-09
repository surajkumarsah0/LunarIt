
import InternshipHero from '#/components/careers/internship/InternshipHero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/internship')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <InternshipHero/>
  </div>
}
