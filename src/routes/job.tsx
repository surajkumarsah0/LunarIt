
import JobHero from '#/components/careers/job/JobHero'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/job')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
   <JobHero/>

  </div>
}
