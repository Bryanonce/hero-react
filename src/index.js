import React from'react';
import ReactDOM from 'react-dom';
//importar react functional components
import {HeroesApp} from './HeroesApp';
//importar estilos
import './index.css';

ReactDOM.render(
    <HeroesApp />,
    document.querySelector('#root')
);