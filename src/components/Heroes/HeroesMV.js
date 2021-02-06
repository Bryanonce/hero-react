import React from 'react';
//import components
import {Heroes} from './Heroes'

export const HeroesMV = ()=>{
    const url = 'https://www.superheroapi.com/api.php/1860537170767427/search/a'
    return (
        <Heroes url={url} publisher="Marvel Comics" />
    );
}