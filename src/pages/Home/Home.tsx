import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <>
      <div className="flex mt-12 flex-col items-center justify-center">
        <h1 className="font-bold lg:text-6xl sm:text-2xl my-4">
          <p>
            <a className="hover:underline" href="mailto:matthew.a.lewis7@gmail.com?subject=Hello!&body=Hi Matthew,">
              Matthew Lewis
            </a>
            - WeTransfer
          </p>
        </h1>
        <Button asChild>
          <a href="/rooms" title="rooms">
            Book a room
          </a>
        </Button>
      </div>
    </>
  )
}
