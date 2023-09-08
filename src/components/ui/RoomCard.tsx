import { Image } from './image'

import { Button } from '@/components/ui/button'
import { useBookRoom } from '@/hooks/useBookRoom'

export default function RoomCard({ room }: { room: Room }) {
  const { mutate, isLoading } = useBookRoom()

  return (
    <div>
      <div className="relative h-[13.75rem] w-full">
        <Image src={room.thumbnail} alt={room.name} />
      </div>
      <div className="pt-[0.63rem]">
        <div className="flex justify-between items-start">
          <h2 data-testid={'room-name'} className="text-xl font-bold">
            {room.name}
          </h2>
          <Button
            data-testid={'book-button'}
            disabled={isLoading || room.spots === 0}
            onClick={() => {
              mutate(room)
            }}
          >
            {room.spots === 0 ? 'Unavailable' : 'Book!'}
          </Button>
        </div>
        <p data-testid={'remaining-spots'} className="text-primary-500">
          {room.spots} spots remaining
        </p>
      </div>
    </div>
  )
}
