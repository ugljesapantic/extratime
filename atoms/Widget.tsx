import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react'

type Props = {
  className?: string;
  title: string;
}

const Widget: React.FC<Props> = ({ className, title, children}) => {

  
  return <div className={clsx(
    'p-4 shadow rounded flex flex-col h-48 w-48 border border-gray-200',
    className
  )}>
    <div className="text-lg mb-2">{title}</div>
    {children}
  </div>
};


export default Widget
