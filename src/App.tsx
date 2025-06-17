import { router } from '@/routers/router'
import { RouterProvider } from 'react-router'
import {Toaster} from 'sonner'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors />
    </>
  )
}
