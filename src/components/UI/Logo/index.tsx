interface LogoProps {
  isFullscreen?: boolean
}

export const Logo: React.FC<LogoProps> = ({ isFullscreen = false }) => {
  return (
    <img
      data-testid="app-logo"
      className={isFullscreen ? 'w-[240px] h-[240px]' : 'w-auto h-auto'}
      src="/img/icon-512.png"
      alt="Application Logo"
    />
  )
}
