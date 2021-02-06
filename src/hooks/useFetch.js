import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

export const useFetch = (initial_url)=>{
    const [url, setUrl] = useState(initial_url);
    const [loading, setLoading] = useState(true);
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res.results);
            setLoading(false)
        })
    },[url]);
    return [loading,data,setUrl];
}

useFetch.propTypes = {
    initial_url: PropTypes.string
}