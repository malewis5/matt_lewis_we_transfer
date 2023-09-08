import { Skeleton } from './skeleton'

export default function RoomCardSkeleton() {
  return (
    <div data-testid="room-card-skeleton">
      <div className="relative h-[13.75rem] w-full">
        <div className="animate-pulse bg-gray-300 absolute h-full w-full rounded-[0.6875rem]"></div>
      </div>
      <div className="pt-[0.63rem]">
        <div className="flex justify-between items-start">
          <Skeleton className="h-6 w-1/4 rounded" />
          <Skeleton className="h-9 w-24 rounded" />
        </div>
        <Skeleton className="h-3 w-1/3 rounded mt-2" />
      </div>
    </div>
  )
}
