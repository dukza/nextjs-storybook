import React from 'react'
export default function Link ({
    children,
    className,
    backgroundColor,
    component:Component = 'a'}){
        console.log(backgroundColor)
    return(
        <>
        <Component className={className} style={{ backgroundColor }}>
        {children}
        </Component>
        </>
    )
}