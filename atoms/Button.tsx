import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface Props {
  isLoading?: boolean
}

const Button: React.FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({children, isLoading, className = '', ...elProps}) => {
  return (
    <button className={clsx(
      'bg-gray-700 rounded font-medium hover:bg-gray-600 transition-bg duration-100 focus:bg-gray-500 px-6 py-3',
      isLoading && 'bg-gray-300',
      className
    )} {...elProps}>{children}</button>
  )
}

export default Button
