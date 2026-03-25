import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            {/*Primary Menu */}
            <Link to="/">Home</Link> |
            <Link to="/introduction">Introduction</Link> |
            <Link to="/contract">Contract</Link> |
            <Link to="/fcc-cert">FCC Certs</Link>

            <br />

            {/* Secondary Menu (Mascot) */}
            <Link to="/hobby">Keen Turkey Hobby</Link>
            <Link to="/gallery">Keen Turkey Gallery</Link>
        </nav>
    );
};

export default Navbar;