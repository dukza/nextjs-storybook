import React from 'react';
import classNames from 'classnames';
// style
import './TodoItem.module.css';


export default function TodoItem({text}){
    return(
        <>
            <div>{text}</div>
        </>
    )
}