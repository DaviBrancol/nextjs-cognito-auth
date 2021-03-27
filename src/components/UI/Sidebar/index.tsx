// Modules Import
import { useRouter } from 'next/router'

// Application Import
import { sidebarItems } from '@constants/index'
import { NavItemState } from '@typings/index'

// Components Import
import { NavItem } from '../NavItem'

const Sidebar: React.FC = () => {
  const router = useRouter()
  const pathname = router.pathname

  function containsPath(routePath, pathname) {
    if (routePath === '/') {
      return pathname === routePath
    }
    return pathname.includes(routePath)
  }

  return (
    <ul className="fixed top-20 left-0 w-20 p-4 bg-white inner-height z-50 shadow-sm flex flex-col items-center">
      {sidebarItems.map((route, id) => (
        <NavItem
          {...route}
          key={id}
          state={containsPath(route.pathname, pathname) ? NavItemState.active : NavItemState.normal}
        />
      ))}
    </ul>
  )
}

export { Sidebar }
