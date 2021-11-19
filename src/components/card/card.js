import React from "react";
import "./card.css";

export function Card({ image }) {
    return (
        <div className="my-card col my-2">
            <img className="card-img" alt={image.description} src={image.url} />
        </div>
    );
}
