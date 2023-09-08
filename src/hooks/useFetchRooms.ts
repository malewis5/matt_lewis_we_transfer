import { useQuery } from '@tanstack/react-query'

import { fetchData } from '@/lib/utils'

interface FetchRoomsResponse {
  rooms: Room[]
}

export const useFetchRooms = () => {
  const { data, error } = useQuery<FetchRoomsResponse, Error>({
    queryKey: ['rooms'],
    queryFn: () => {
      return fetchData<FetchRoomsResponse>('https://wetransfer.github.io/rooms.json')
    },
  })

  return { data, error }
}
