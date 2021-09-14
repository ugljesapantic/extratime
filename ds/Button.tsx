import React, { ButtonHTMLAttributes } from 'react'

interface Props {
  
}

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...elProps}) => {
  return (
    <button {...elProps}>{children}</button>
  )
}

export default Button
