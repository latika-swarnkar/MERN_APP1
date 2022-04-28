import { Link } from "react-router-dom"
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color_ justify-content-center">

            <div className="container-fluid">
                <Link to="/" className="btn btn-danger text-light justify-content-left"><FontAwesomeIcon icon="book-arrow-right" /><i className="fa-solid fa-book-arrow-right"></i>Book Store APP</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item ">
                        <Link to="/signin" className="nav-link text-light"> SignUp</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/signup" className="nav-link text-light"> SignIn</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;