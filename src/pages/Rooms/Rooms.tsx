import RoomCard from '@/components/ui/RoomCard'
import RoomCardSkeleton from '@/components/ui/RoomCardSkeleton'
import { Button } from '@/components/ui/button'
import { useFetchRooms } from '@/hooks/useFetchRooms'

export function Rooms() {
  const { data, error } = useFetchRooms()

  return (
    <>
      <h1 className="text-4xl mb-2">Rooms</h1>
      <p className="lg:max-w-xl w-full mb-[2.44rem] text-secondaryBlack">
        Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.
      </p>
      {error ? (
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-center text-red-500 mb-4">Something went wrong. Please try again. </p>
          <Button
            onClick={() => {
              window.location.reload()
            }}
          >
            Refresh
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.rooms
            ? data.rooms.map((room: Room) => {
                return <RoomCard room={room} key={room.name} />
              })
            : new Array(8).fill(1).map((_, i) => {
                return <RoomCardSkeleton key={i} />
              })}
        </div>
      )}
    </>
  )
}
