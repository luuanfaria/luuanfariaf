'use client'
import { usePathname, useRouter } from '@/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages width={20} height={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'en' })}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'pt' })}
        >
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
