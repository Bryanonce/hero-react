import {useEffect,useState} from 'react'

export const useStorage = ({
    defaultValue,
    method
})=>{
    const [value, setValue] = useState(defaultValue);
    const [verify, setVerify] = useState(false);
    useEffect(()=>{
        try{
            let local = JSON.parse(localStorage.getItem(method));
            if(!local){
                setValue(defaultValue);
            }else{
                setValue(local);
                setVerify(true);
            }
        }catch(e){
            setValue(defaultValue);
        }
    },[defaultValue,method])
    useEffect(()=>{
        if(verify){
            try{
                localStorage.setItem(method,JSON.stringify(value));
            }catch(e){
                
            }
        }
        setVerify(true)
    },[value,verify,method])

    return [value,setValue];
}