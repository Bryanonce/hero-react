import React from 'react';
//import components
import {Heroes} from './Heroes'

export const HeroesDC = ()=>{
    const url = 'https://www.superheroapi.com/api.php/1860537170767427/search/a'
    return (
        <Heroes url={url} publisher="DC Comics" />
    );
}