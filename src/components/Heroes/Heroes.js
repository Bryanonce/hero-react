import React,{useEffect, useRef} from 'react';
//import styles
import './Heroes.css';
//import Custom Hooks
import { useFetch } from '../../hooks/useFetch';
//import components
import { Loading } from './layouts/Loading/Loading';
import { ListHeroes } from './layouts/heroes/ListHeroes';

export const Heroes = ({
    url='https://www.superheroapi.com/api.php/1860537170767427/search/1',
    publisher
}) => {
    const isMounted = useRef(true);
    const [loading, data] = useFetch(url);
    useEffect(()=>{
        return ()=>{
            isMounted.current = false
        }
    },[])
    return (
        <div className="heroes-container">
            {   isMounted?
                    loading ?
                        <Loading />
                        :
                        publisher?
                            <ListHeroes heroes={data.filter(e=> e.biography.publisher === publisher)} />
                        :
                            <ListHeroes heroes={data? data: []} />
                :
                null
            }
        </div>
    );
}