import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/applications/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/applications/"!</div>
}
