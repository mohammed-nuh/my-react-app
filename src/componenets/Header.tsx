import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg brand_bg1 stickyNav">
                <div className="container-fluid">
                    <a className="navbar-brand brand_tc4" href="#">My React App</a>
                    <button className="navbar-toggler brand_bg2 brand_tc2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon brand_bg2 brand_tc4"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link brand_tc4" to='/'>Home</Link>
                            <Link className="nav-link brand_tc4" to='/counter'>Counter</Link>
                            <Link className="nav-link brand_tc4" to='/products'>Products</Link>
                            <Link className="nav-link brand_tc4" to='/movies'>Movies</Link>
                            <Link className="nav-link brand_tc4" to='/quotes'>Quotes</Link>
                            <Link className="nav-link brand_tc4" to='/recipes'>Recipes</Link>
                            <Link className="nav-link brand_tc4" to='/contact'>Contact</Link>
                            <Link className="nav-link brand_tc4" to='/about'>About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;