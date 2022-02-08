import React from "react";
import axios from "axios";
import "./cards.css";
import Card from "./card";

const Componente = props => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const RMurl = "https://rickandmortyapi.com/api/character";

    const getData = async () => {
        const res = await axios.get(RMurl);
        props.setPosts(res.data.results);
    };

    if (props.posts.length === 0) {
        return (
            <div className="d-flex justify-content-around">
                <h1>No hay tareas</h1>
                <button className="btn btn-primary" onClick={getData}>
                    Obtener personajes
                </button>
                <img src="" />
            </div>
        );
    }

    return (
        <div>
            <div className="card__container">
                {props.posts.map((element, i) => {
                    return <Card key={i} data={element} />;
                })}
            </div>
        </div>
    );
};

export default Componente;
