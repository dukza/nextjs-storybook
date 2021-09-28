import React from 'react';
import classNames from 'classnames';
// style
import './Button.module.css';
// component-1
import Link from '../Link';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'| 'xl';
  backgroundColor?: string;
  label: string;
  className: string;
  component: string;
  variant: string;
  style: string;
  type: string;
  shape: string;
}

export default function Button ({
    label,
    className,
    component = 'button',
    variant,
    style = 'primary',
    type,
    size = 'xl',
    shape,
    backgroundColor,
    ...rest}: ButtonProps){
    const _className = classNames(
      'btn',
      variant ? type ? `btn-${variant}-${style}-${type}` : `btn-${variant}-${style}` : `btn-${style}`,
      size ?`btn-${size}`: '',
      className,
    )
    return(
        <>
        <Link
        component = {rest.href ? 'a' : component}
        className = {_className}
        backgroundColor={backgroundColor}
        {...rest}
        >{label}</Link>
        </>
    )
}