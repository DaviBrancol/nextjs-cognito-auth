import { Logo } from '../Logo'
import { FiLogOut } from 'react-icons/fi'

interface HeaderProps {
  name: string
  logout: () => void
}

export const Header: React.FC<HeaderProps> = ({ name, logout }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 flex justify-between items-center shadow-sm p-4 bg-white z-40">
      <Logo />
      <div className="flex justify-end items-center">
        <p className="mr-6 text-gray-700 text-lg">{name}</p>
        <FiLogOut onClick={logout} className="text-xl text-gray-700 cursor-pointer" />
      </div>
    </div>
  )
}
