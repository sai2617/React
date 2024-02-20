import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The sai Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
            <Link to="/create" style={{
                color: "White",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;