interface LogoProps {
  isFullscreen?: boolean
}

export const Logo: React.FC<LogoProps> = ({ isFullscreen = false }) => {
  return (
    <img
      data-testid="app-logo"
      className={isFullscreen ? 'w-64' : 'w-12'}
      src="/img/icon-512.png"
      alt="Application Logo"
    />
  )
}
