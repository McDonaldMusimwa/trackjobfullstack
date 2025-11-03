import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/interviews/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/interviews/"!</div>
}
