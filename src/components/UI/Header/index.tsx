import { Logo } from '../Logo'

export const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 flex shadow-sm p-4 bg-white z-40">
      <Logo />
    </div>
  )
}
