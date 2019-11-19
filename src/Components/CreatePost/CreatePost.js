import React, { useState } from 'react';
import Popup from '../Popup';

import AddElement from './AddElement';

import '../../Styles/CreatePost/CreatePost.css'



//            <span className='create-post_popup-title'>Añade una seccion</span>


//<textarea value={content} onChange={e => handleChange(e)} className="create-post_text-area create-post_popup_text-area" />

const CreateContent = ({ content, handleChange }) => {
    return (
        <div className="create-post_popup-container">
            <AddElement />

        </div>);
}


const CreatePost = () => {
    const TextArea = () => <textarea value={content} onChange={e => handleChange(e)} className="create-post_text-area" />
    const [content, setContent] = useState("");
    const handleChange = e => {
        setContent(e.target.value);
    }


    return (
        <Popup trigger={TextArea()} ><CreateContent content={content} handleChange={handleChange} /></Popup>
    )
}

export default CreatePost;