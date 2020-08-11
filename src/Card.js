import React, { Fragment } from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-green dib w-30 f5 br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?size=100x100`} alt='robo_photo'></img>
            <Fragment>
                <h2 className='f5'>{name}</h2>
                <p className='f6 w-90'>{email}</p>
            </Fragment>
        </div>
    );
};

export default Card;