import '../styles/index.css'
import Maintenance from "../components/maintenance";
import config from "../config/seo.json";
import {DefaultSeo} from "next-seo";

function MyApp({ Component, pageProps }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === '1') {
    return <>
      <DefaultSeo {...config}/>
      <Maintenance />
    </>;
  }
  return <>
    <DefaultSeo {...config}/>
    <Component {...pageProps} />
  </>
}

export default MyApp
