import Layout from "../components/layout";
import { Instagram} from "react-feather";
import Logo from "./Icons/Logo";

export default function Maintenance() {
    const style = {
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <Layout>
            <div style={style}>
                <Logo style={{ zIndex: 1, marginTop: '10rem', pointerEvents: 'none', height: "300px", width: "300px", color: "#B83E4B" }} />
                <span style={{ margin: '2rem auto', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '1.5rem 0', zIndex: 1, width: '80%', textAlign: 'center' }}>Página web en desarrollo</span>
                <img style={{ position: 'fixed', bottom: 0, pointerEvents: 'none'}} src="/images/footer.png"  />
                <span style={{ display: 'flex', zIndex: 1 }}><Instagram style={{ marginRight: '0.5rem' }} color="#B83E4B" />Mientras tanto, puedes contactar conmigo&nbsp;<a style={{ color: '#B83E4B', fontWeight: 'bold' }} href="https://www.instagram.com/laconsultadevirginia/" target="_blank">a través de instagram.</a></span>
            </div>
        </Layout>
    )
}
