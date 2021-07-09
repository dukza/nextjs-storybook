import React from 'react';
import classNames from 'classnames';
// style
import './Button.module.css';



// component-1
import Link from './../Link';
export default function Button ({
    children,
    className,
    component = 'button',
    variant,
    color = 'primary',
    type,
    size,
    shape,
    ...rest},ref){
    const _className = classNames(
      'btn','btn-xl',
      variant ? type ? `btn-${variant}-${color}-${type}` : `btn-${variant}-${color}` : `btn-${color}`,
      size ?`btn-${size}`: '',
      className,
    )
    return(
        <>
        <Link
        component = {rest.href ? 'a' : component}
        className = {_className}
        {...rest}
        ref={ref}
        >{children}</Link>
        </>
    )
}