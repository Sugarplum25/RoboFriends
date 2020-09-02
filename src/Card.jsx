import React, { Fragment } from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-green flex flex-column items-center navy w-40 w-30-m w-30-l f5 br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?size=100x100`} alt='robo_photo'></img>
            <Fragment>
                <h2 className='f4 f3-ns f3-m f3-l'>{name}</h2>
                <p className='f5 f5-ns f4-m f4-l tc'>{email}</p>
            </Fragment>
        </div>
    );
};

export default Card;