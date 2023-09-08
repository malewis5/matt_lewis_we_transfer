import { Route, Routes } from 'react-router-dom'

import { Base } from '@/layouts/Base/Base'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Base />}></Route>
    </Routes>
  )
}
