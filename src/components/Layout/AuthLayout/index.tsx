// Modules Import
import { BeatLoader } from 'react-spinners'

// Application Import
import { useAuth } from '@context/index'

export const AuthLayout: React.FC = ({ children }) => {
  const auth = useAuth()

  if (auth.state.isLoading) {
    return (
      <div
        className="bg-white w-full h-screen flex justify-center items-center"
        data-testid="auth-loading-container"
      >
        <BeatLoader color="#0D66C4" />
      </div>
    )
  }

  return (
    <div data-testid="auth-loaded-container">
      <div className="w-full h-screen bg-gray-800">{children}</div>
    </div>
  )
}
