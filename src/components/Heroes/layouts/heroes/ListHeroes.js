import React from 'react';
import PropTypes from 'prop-types'
//import components
import {CardHero} from './CardHero'
import { Error404 } from './Error404';
//import styles
import './CardHero.css'

export const ListHeroes = ({heroes})=>{
    return (
        <div className="list-hero-content">
            {
                (heroes.length>0)?
                    heroes.map((hero)=>{
                        return <CardHero key={hero.id} hero={hero} />
                    })
                :
                    <Error404 />
            }
        </div>
    );
}

ListHeroes.propTypes = {
    heroes: PropTypes.array
}