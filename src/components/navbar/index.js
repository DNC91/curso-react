import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../home";
import Componente from "../cards";

const Navbar = props => {
    return (
        <Router>
            <div className="header">
                <Link className="navbar__element" to="/">
                    Inicio
                </Link>
                <Link className="navbar__element" to="/contact">
                    Contacto
                </Link>
                <Link className="navbar__element" to="/tasklist">
                    Lista de personajes
                </Link>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/contact" element={<h1>Contacto</h1>} />

                <Route
                    exact
                    path="/tasklist"
                    element={
                        <Componente
                            setPosts={props.setPosts}
                            posts={props.posts}
                        />
                    }
                ></Route>
            </Routes>
        </Router>
    );
};

export default Navbar;
