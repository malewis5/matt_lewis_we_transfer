import { Route, Routes } from 'react-router-dom'

import { Base } from '@/layouts/Base/Base'
import { Home } from '@/pages/Home/Home'
import { Rooms } from '@/pages/Rooms/Rooms'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
      </Route>
    </Routes>
  )
}
