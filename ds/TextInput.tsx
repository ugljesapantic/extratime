import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react'

type Props = {label: string}

const TextInput = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & Props>(({label, className, ...rest}, ref) => {
  return <label className={clsx(
    "flex flex-col text-sm font-medium",
    className
  )}>
    {label}
    <input className={clsx(
      `h-10 px-3 leading-10 bg-gray-800 text-base outline-none rounded mt-1 ring-1 ring-gray-900 focus:ring-blue-400 hover:ring-black`,
    )}  ref={ref}  {...rest} />
  </label>
});


export default TextInput
