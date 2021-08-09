// import * as icons from './svg';
import React, { useMemo, useState } from 'react';
import classNames from 'classnames';

let warned = {}
const colog = (msg, icon) => {
  if (!warned[icon] && process && process.env && process.env.NODE_ENV === 'development') {
    warned[icon] = true
    console.error(msg)
  }
}

const toCamelCase = (str) => {
  return str.replace(/([-_][a-z0-9])/ig, ($1) => {
    return $1.toUpperCase()
  }).replace(/-/ig, '')
}

const Icon = ({
    className,
    name,
    content,
    customClasses,
    size,
    src,
    title,
    use,
    ...attributes
}) => {
    const [change, setChange] = useState(0)

    useMemo(() => setChange(change + 1), [name, JSON.stringify[content]])
  
    const iconName = useMemo(()=>{
      const iconNameIsKebabCase = name && name.includes('-')
      return iconNameIsKebabCase ? toCamelCase(name) : name
    }, [change])
  
    const titleCode = title ? `<title>${title}</title>` : ''
  
    const code = useMemo(() => {
      if (content) {
        return content
      } else if (name && React.icons) {
  
        return React.icons[iconName] ? React.icons[iconName] :
          colog(`CIcon component: icon name '${iconName}' does not exist in React.icons object. ` +
                `To use icons by 'name' prop you need to make them available globally ` + 
                `by adding them to React.icons object. CIcon component docs: https://coreui.io/react/docs/components/CIcon \n`,
                iconName
              )
      }
    }, [change])
  
    const iconCode = useMemo(()=>{
      return Array.isArray(code) ? code[1] || code[0] : code
    }, [change])
    const scale = (()=>{
        return Array.isArray(code) && code.length > 1 ? code[0] : '64 64'
    })()

    const viewBox = (()=>{
    return attributes.viewBox || `0 0 ${scale}`
    })()

    const computedSize = (()=>{
        const addCustom = !size && (attributes.width || attributes.height)
        return size === 'custom' || addCustom ? 'custom-size' : size
    })()
    
    const computedClasses = classNames(
        'c-icon',
        computedSize && `c-icon-${computedSize}`,
        className
    )
    const classes = customClasses || computedClasses
    return(
        <>
        <svg
          {...attributes}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          className={classes}
          role="img"
          dangerouslySetInnerHTML={{__html: titleCode + iconCode}}
        />
        </>

    )
}

export default Icon;