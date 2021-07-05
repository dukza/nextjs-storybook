import React, { ButtonHTMLAttributes, ElementType, forwardRef } from 'react'
export default function Link ({
    children,
    className,
    component:Component = 'a'}){
    return(
        <>
        <Component className={className}>
        {children}
        </Component>
        </>
    )
}