import '../styles/globals.css'
import { ModalProvider } from 'react-modal-hook'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
