import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../home";
import Cards from "../cards";

const Navbar = () => {
    return (
        <Router>
            <div className="header">
                <Link className="navbar__element" to="/">
                    Inicio
                </Link>
                <Link className="navbar__element" to="/contact">
                    Contacto
                </Link>
                <Link className="navbar__element" to="/rmcharacters">
                    Lista de personajes
                </Link>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/contact" element={<h1>Contacto</h1>} />

                <Route exact path="/rmcharacters" element={<Cards />}></Route>
            </Routes>
        </Router>
    );
};

export default Navbar;
