import React, { useEffect, useRef, useState } from 'react';
import './ChartForm.css'

const ChartForm = ({onSearch}) => {
    const fo = useRef()
    const [input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setInput('')
        fo.current.focus()
    }

    useEffect(()=> {
        onSearch(input)
    },[input])


    return (
        <form className='ChartForm' onSubmit={onSubmit}>
            <input type='text' placeholder='Search artists, songs, or albums' onChange={onChange} ref={fo}></input>
        </form>
    );
};

export default ChartForm;