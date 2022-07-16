import { Link, useMatch, useResolvedPath } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title"> <img src='/logo.webp' alt='logo' /> </Link>
            <h1 className='unroofed'>UNROOFED ADVENTURES</h1>
            <ul>
                    <CustomLink to="/Shop">Shop</CustomLink>
                    <CustomLink to="/rentals">Rentals</CustomLink>
                    <CustomLink to="/powerStations">Power Stations</CustomLink>
                    <CustomLink to="/campergrill">Camper Grill</CustomLink>
                    <CustomLink to="/MTNops">MTN Ops</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/testimonials">Testimonials</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }