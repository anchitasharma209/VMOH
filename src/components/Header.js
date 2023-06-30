import React from "react"
import {Link} from "react-router-dom";
import logo from "../assets/Vector.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                            <img className="logo" src={logo} style={{left:"43px"}} />
                                <span className="ms-2" style={{fontFamily:"Cormorant Garamond",fontStyle:"italic",weight:"700",fontSize:"20px",color:"#008080",left:"65px",top:"39px",paddingTop:"20px",paddingLeft:"0px",width:"105px",heigth:"29px"}}>
                                    Open House
                           </span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" style={{backgroundColor: '#24a0ed', color: 'white !important', padding: '7px 20px', borderRadius: '25px'}}>
                        Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;