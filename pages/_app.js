import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
