import React, { useState } from 'react';
import cn from 'classnames';
import './card.css';


const Card = ({id, name, email}) => {
    const [color, setColor] = useState(false);
    const cardClasses = cn('card', {color});
    const changeColor = () => setColor(!color);
    return (
        <div className={cardClasses} onClick={changeColor}>
        <div>
            <img src={`https://robohash.org/${id}?size=100x100`} alt="robot">
            </img>
        </div>
        <div>
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{email}</p>
        </div>
    </div>
    )
};

export default Card;