// Components Import
import { MainLayout } from '@components/Layout'
import { Title, Logo, Caption } from '@components/UI'

export const HomeScreen: React.FC = () => {
  return (
    <MainLayout>
      <div className="w-full inner-height flex justify-center items-center flex-col">
        <Logo isFullscreen />
        <div className="mt-10">
          <Title value="Welcome to your new App" />
        </div>
        <div className="mt-4">
          <Caption value="I'm sure you are going to build something incredible!" />
        </div>
      </div>
    </MainLayout>
  )
}
