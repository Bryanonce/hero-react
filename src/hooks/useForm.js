import {useState} from 'react';

export const useForm = (initialValue={
    email: '',
    password: ''
})=>{
    const [form, setForm] = useState(initialValue);
    const handleInputChange = ({target})=>{
        const {name, value} = target
        if(value.length<=0){
            return;
        }
        setForm({
            ...form,
            [name]: value
        })
    }
    return [form,handleInputChange];
}
