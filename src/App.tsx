import { router } from '@/routers/router'
import { RouterProvider } from 'react-router'

export function App() {
  return (
      <RouterProvider router={router} />
  )
}
