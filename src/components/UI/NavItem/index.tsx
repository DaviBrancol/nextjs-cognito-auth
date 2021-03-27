// Modules Import
import { IconType } from 'react-icons'
import Link from 'next/link'
import cs from 'clsx'

// Application Import
import { NavItemState } from '@typings/index'

interface NavItemProps {
  Icon: IconType
  pathname: string
  state: NavItemState
}

export const NavItem: React.FC<NavItemProps> = ({ Icon, pathname, state }) => {
  return (
    <li>
      <Link href={pathname}>
        <a
          className={cs(
            'mb-6 w-[40px] h-[40px] text-lg text-gray-800 flex justify-center items-center p-2 rounded-md',
            {
              'bg-gray-100': state === NavItemState.active,
            }
          )}
        >
          <Icon />
        </a>
      </Link>
    </li>
  )
}
