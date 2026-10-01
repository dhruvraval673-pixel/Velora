import { Link } from "react-router-dom";

function Footer() {
  return <footer className="footer"><div><Link className="logo" to="/">VELORA</Link><p>Time, redefined for a new generation.</p></div><div className="footer-links"><Link to="/">Home</Link><Link to="/watches">Watches</Link><a href="/#collections">Collections</a><a href="/#about">About</a></div><small>© 2026 VELORA. Concept project.</small></footer>;
}
export default Footer;
