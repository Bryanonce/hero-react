import React from 'react';
//import styles
import './CardHero.css';

export const CardHero = ({hero}) => {
    const {image,name,biography} = hero;
    return (
        <div className="card">
            <img className="card-img-top" src={image.url} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {biography['full-name']}, mas conocido como {name},
                    tuvo su primera aparición en el comic {biography['first-appearance']},
                    publicado por la empresa {biography.publisher}
                </p>
                <button className="w-100 btn btn-primary">Ver detalle</button>
            </div>
        </div>
    );
}