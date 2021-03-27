// Modules Import
import { FiHome, FiStar } from 'react-icons/fi'

// Application Import
import { INavItem } from '@typings/index'

export const sidebarItems: INavItem[] = [
  {
    Icon: FiHome,
    pathname: '/',
  },
  {
    Icon: FiStar,
    pathname: '/example',
  },
]
