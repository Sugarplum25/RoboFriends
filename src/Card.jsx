import React, { Fragment } from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-green w-30 f5 br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?size=100x100`} alt='robo_photo'></img>
            <Fragment>
                <h2 className='card-title'>{name}</h2>
                <p className='w-90 tc card-text'>{email}</p>
            </Fragment>
        </div>
    );
};

export default Card;