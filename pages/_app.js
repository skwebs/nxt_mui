import '../styles/globals.css'
import Navigation from '../components/Navigation'
//import AppBarComponent from '../components/RespAppBar'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navigation/>
    {/*<AppBarComponent/>*/}
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
