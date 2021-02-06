import React from 'react';
import {useParams} from 'react-router-dom'
//import components
import {Heroes} from '../../components/Heroes/Heroes';

export const SearchHero = ()=>{
    const {search} = useParams();
    const url = 'https://www.superheroapi.com/api.php/1860537170767427/search/'+search;
    return (
        <Heroes url={url} />
    );
}