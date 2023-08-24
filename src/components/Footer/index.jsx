import "./Footer.css"

const Footer = () => {
    return (
    <footer className="footer"
    style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="redes">
            <a href="https://www.facebook.com/aluracursoslatam">
                <img src="/img/facebook.svg" alt="logo facebook" />

            </a>
            <a href="https://aluracursos.com">
                <img src="/img/twitter.svg" alt="logo twitter" />
            </a>
            <a href="https://www.instagram.com/aluralatam/">
                <img src="/img/instagram.svg" alt="" />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong className="firma">Desarrollado por <br /> Andrea Jaramillo <br /> Alura Latam</strong>
    </footer>
    )
        
    
}

export default Footer