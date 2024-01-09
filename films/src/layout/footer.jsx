import footerlogo from './img/L4P-logo.png'

function Footer() {
    return <footer className="page-footer accent-1">
        <div className="footer-copyright">
            <div className="footer-container">
                © {new Date().getFullYear()} LFoPi
                <img className="footer-logo" src={footerlogo} alt="logo" />
            </div>
        </div>
    </footer>
}
export { Footer };