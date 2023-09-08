import { useState } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

const Image = ({ src, alt, ...imgProps }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const skeletonClass = cn(
    'animate-pulse bg-gray-300 absolute h-full w-full rounded-[0.6875rem] transition-opacity duration-500',
    {
      'opacity-0': imageLoaded,
      'opacity-100': !imageLoaded,
    }
  )

  const imgClass = cn(
    'absolute h-full w-full object-cover transition-opacity duration-500 rounded-[0.6875rem] bg-gray-300',
    {
      'opacity-0': !imageLoaded,
      'opacity-100': imageLoaded,
    }
  )

  return (
    <>
      <Skeleton className={skeletonClass} />
      <img
        {...imgProps}
        src={src}
        alt={alt}
        className={imgClass}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageLoaded(true)
        }}
      />
    </>
  )
}

Image.displayName = 'Image'

export { Image }
