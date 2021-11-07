import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface Props {
  isLoading?: boolean
}

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({children, isLoading, className = '', ...elProps}) => {
  return (
    <button className={clsx(
      'bg-indigo-600 h-10 rounded font-medium hover:bg-indigo-700 transition-bg duration-100 focus:bg-indigo-800',
      isLoading && 'bg-indigo-800',
      className
    )} {...elProps}>{children}</button>
  )
}

export default Button
