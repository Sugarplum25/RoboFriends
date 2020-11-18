import React from 'react';
import cn from 'classnames';
import './card.css';

class Card extends React.Component {
    state = {
        color: false,
    };
    changeColor = () => {
        this.setState(({ color }) => ({color: !color}));
    }
    
    render() {
        const { id, name, email } = this.props;
        const cardClasses = cn('card', {'color': this.state.color});
        return (
            <div className={cardClasses} onClick={this.changeColor}>
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
    }
};

export default Card;