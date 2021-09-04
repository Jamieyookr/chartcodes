import React from 'react';
import './Modal.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CloseButton from 'react-bootstrap/CloseButton'

const Modal = ({point, onModal}) => {
    const {rank, title, singer, poster, state, id, key, like, done, album} = point
    return (
        <div className='Modal'>
            <div className='bg'></div>
            <div className='popup' onClick={onModal}>
                <span><CloseButton/></span>
                <h2>{title}</h2>
                <p>{singer}</p> 
                <div>
                    <iframe src={`https://www.youtube.com/embed/${key}`} frameborder='0'></iframe>
                </div>
            </div>
        </div>
    );
};

export default Modal;