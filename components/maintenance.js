import Layout from "../components/layout";
import Container from "../components/container";

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
                <img style={{ zIndex: 1, marginTop: '10rem' }} height="300px" width="300px" src="/images/maintenance.jpeg" />
                <span style={{ marginTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem', zIndex: 1 }}>Página web en proceso de desarrollo</span>
                <img style={{ position: 'fixed', bottom: 0}} src="/images/footer.png"  />
            </div>
        </Layout>
    )
}
