// Modules Import
import { BeatLoader } from 'react-spinners'

// Application Import
import { useAuth } from '@context/index'

// Components Import
import { Header, Sidebar } from '@components/UI'

export const MainLayout: React.FC = ({ children }) => {
  const auth = useAuth()

  if (auth.state.isLoading) {
    return (
      <div
        className="bg-white w-full h-screen flex justify-center items-center"
        data-testid="main-loading-container"
      >
        <BeatLoader color="#0D66C4" />
      </div>
    )
  }

  return (
    <div data-testid="main-loaded-container">
      <Header name={auth.state.user?.attributes?.name} logout={auth.operations.logout} />
      <Sidebar />
      <div className="p-8 z-30 bg-gray-100 ml-20 mt-20 inner-height">{children}</div>
    </div>
  )
}
