import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form';

type Props = {error?: boolean, background?: string} & InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, Props>(({error, className,...rest}, ref) => {

  return <input ref={ref} className={clsx(
    `h-10 px-3 leading-10 text-gray-100 text-base bg-transparent outline-none rounded mt-1 ring-1 ring-gray-300 transition-all duration-100`,
    // TODO investigate why ring hover is not working
    !error && `focus:ring-green-500 hover:ring-green-800`,
    error && `ring-red-500 focus:ring-red-500`,
    className
  )} {...rest} />
  
});


export default Input
