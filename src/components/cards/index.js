import React, { useState } from "react";
import axios from "axios";
import "./cards.css";
import Card from "./card";

const Cards = props => {
    const [characters, setCharacters] = useState([]);
    let [page, setPage] = useState(1);
    const url = "https://jsonplaceholder.typicode.com/posts";
    const RMurl = `https://rickandmortyapi.com/api/character?page=${page}`;

    const getData = async () => {
        const res = await axios.get(RMurl);
        setCharacters(res.data.results);
    };

    const changePage = () => {
        setPage(page + 1);
        getData();
    };

    if (characters.length === 0) {
        return (
            <div className="d-flex justify-content-around">
                <h1>No hay datos</h1>
                <button className="btn btn-primary" onClick={getData}>
                    Obtener personajes
                </button>
                <img src="" />
            </div>
        );
    }

    return (
        <div className="big__container">
            {page > 1 ? (
                <button className="btn btn-success" onClick={changePage}>
                    Anterior
                </button>
            ) : (
                ""
            )}
            <button className="btn btn-success" onClick={changePage}>
                Siguente
            </button>
            <div className="card__container">
                {characters.map((element, i) => {
                    return <Card key={i} data={element} />;
                })}
            </div>
        </div>
    );
};

export default Cards;
