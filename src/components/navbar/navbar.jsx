import { Link } from 'react-router-dom'
import "./navbar.scss"
import Logo from "../../assets/logo.png"

export const Navbar = () => {
    return (
        <nav>
            <Link>
                <img
                    src={Logo}
                    alt='logo'
                />
            </Link>
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>About us</Link></li>
                <li><Link>Projects</Link></li>
                <li><Link>Get Involved</Link></li>

            </ul>
        </nav>
    )
}
