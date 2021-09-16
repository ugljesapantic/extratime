import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form';

type Props = {label: string, name: string, className: string}

const TextInput: React.FC<Props> = ({label, className, name}) => {
  const {formState: {errors}, register} = useFormContext();

  const error = errors?.[name];
  
  return <label className={clsx(
    "flex flex-col text-sm font-medium",
    error && "text-red-500",
    className
  )}>
    {label}
    <input className={clsx(
      `h-10 px-3 leading-10 bg-gray-800 text-gray-300 text-base outline-none rounded mt-1 ring-1 ring-gray-900 transition-all duration-100`,
      // TODO investigate why wing is not working
      !error && `focus:ring-blue-400 hover:ring-grey-500`,
      error && `ring-red-500 focus:ring-red-500`
    )} {...register(name, {required: true})}  />
  </label>
};


export default TextInput
