import { Outlet } from 'react-router-dom'

export function Base() {
  return (
    <main className="mx-auto my-[1.88rem] px-[2.38rem]" data-testid="main-layout">
      <Outlet />
    </main>
  )
}
