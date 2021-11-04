import clsx from 'clsx';
import Link from 'next/link';
import React, { InputHTMLAttributes } from 'react'

type Props = {
  className?: string;
  title: string;
  url: string;
}

const Widget: React.FC<Props> = ({ className, title, children, url}) => {

  
  return <Link href={url}>
    <div  className={clsx(
      'p-4 shadow rounded flex flex-col h-48 w-48 border border-gray-200 cursor-pointer',
      className
    )}>
      <div className="text-lg mb-2">{title}</div>
      {children}
    </div>
  </Link>
};


export default Widget
