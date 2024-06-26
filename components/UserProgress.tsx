import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { InfinityIcon } from 'lucide-react'
import { courses } from '@/db/schema'
import { HeartIcon } from './HeartIcon'

type TUserProgressProps = {
  activeCourse: typeof courses.$inferSelect
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: TUserProgressProps) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="border rounded-md"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/icons/points.svg"
            alt="Points"
            width={22}
            height={22}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <HeartIcon />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  )
}
