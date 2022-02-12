import React from "react";
import "./card.css";

const Card = props => {
    return (
        <div className="card">
            <img src={props.data.image} alt={props.data.name} />
            <h4>{props.data.name}</h4>
            <p>{props.data.status}</p>
        </div>
    );
};

export default Card;
