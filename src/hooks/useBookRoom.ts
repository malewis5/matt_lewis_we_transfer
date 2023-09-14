import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { fakeHttpResponse } from '@/lib/utils'

/**
 * A hook to mutate rooms. Optimistically updates the UI.
 * @returns {MutationObserver} The mutation observer object from React Query.
 */
export const useBookRoom = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (room: Room) => {
      return fakeHttpResponse(room)
    },

    onMutate: async (room: Room) => {
      const id = toast.loading('Booking Room...', { toastId: room.name })

      await queryClient.cancelQueries({ queryKey: ['rooms'] })

      const previousValue: { rooms: Room[] } | undefined = queryClient.getQueryData(['rooms'])

      previousValue?.rooms.forEach((prevRoom: Room) => {
        if (prevRoom.name === room.name) {
          prevRoom.spots -= 1
        }
      })

      queryClient.setQueryData(['rooms'], {
        ...previousValue,
      })

      return { previousValue, room, id }
    },
    onError: (_err, _variables, context) => {
      queryClient.setQueryData(['rooms'], context?.previousValue ?? { rooms: [] })
    },
    onSettled: (_err, _variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['rooms'] })
      toast.update(context.name, {
        render: 'Booking confirmed!',
        type: 'success',
        isLoading: false,
        autoClose: 1000,
        toastId: context.name + 'success',
      })
    },
  })
}
