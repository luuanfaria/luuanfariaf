import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Image, { StaticImageData } from 'next/image'
import Detail from '@/assets/images/detail.png'
import Dilson from '@/assets/images/dilson.png'
import Dubles from '@/assets/images/dubles.png'

export interface WorkProps {
  title: string
  type: string
  image: StaticImageData
}

export const works: WorkProps[] = [
  {
    title: 'Detail Club Garage',
    type: 'Website',
    image: Detail,
  },
  {
    title: 'Dilson R. Ramos',
    type: 'Landing Page',
    image: Dilson,
  },
  {
    title: 'Dubles & Atores',
    type: 'Website',
    image: Dubles,
  },
]

export function ImageSlicer() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      <div className="flex w-max space-x-4 p-4">
        {works.map((work) => (
          <figure key={work.title} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={work.image}
                alt={`Photo by ${work.title}`}
                className="aspect-[5/4] h-fit w-fit object-cover"
                width={340}
                height={400}
                quality={100}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              {work.type}{' '}
              <span className="font-semibold text-foreground">
                {work.title}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
