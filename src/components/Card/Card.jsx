import React from 'react';
import './card.css';

const Card = ({ name, email, id }) => {
    return (
        <div className="card">
            <div>
                <img src={`https://robohash.org/${id}?size=100x100`} alt="robot">
                </img>
            </div>
            <div>
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{email}</p>
            </div>
        </div>
    );
};

export default Card;