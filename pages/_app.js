import '../styles/index.css'
import Maintenance from "../components/maintenance";

function MyApp({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === '1') {
    return <Maintenance />;
  }
  return <Component {...pageProps} />
}

export default MyApp
