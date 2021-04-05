// Modules Import
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

// CSS Import
import '@css/main.css'
import '@css/tailwind.css'

// Application Import
import { AuthProvider } from '@context/index'
import { BrancolProvider } from '@brancol-ui/react'

import '@lib/cognito/config'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate={router.route === '/' ? 'My Application' : '%s | My Application'} />
      <BrancolProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </BrancolProvider>
    </>
  )
}

export default MyApp
