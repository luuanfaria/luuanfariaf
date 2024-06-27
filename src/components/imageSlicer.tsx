import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Image from 'next/image'

export interface WorkProps {
  title: string
  type: string
  image: string
}

export const works: WorkProps[] = [
  {
    title: 'Clínica Patricia Jacob',
    type: 'Website',
    image: '/images/DraPatriciaJacob.jpeg',
  },
  {
    title: 'Detail Club Garage',
    type: 'Website',
    image: '/images/DetailClubGarage.jpeg',
  },
  {
    title: 'Dilson R. Ramos',
    type: 'Landing Page',
    image: '/images/Dilson.jpeg',
  },
  {
    title: 'Dubles & Atores',
    type: 'Website',
    image: '/images/DublesAtores.jpeg',
  },
  {
    title: 'Blue Moon Yogini',
    type: 'Website',
    image: '/images/BlueMoonYogini.jpeg',
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
