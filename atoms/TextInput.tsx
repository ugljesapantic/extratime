import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form';
import Input from './Input';

type Props = {label: string, name: string, className: string} & InputHTMLAttributes<HTMLInputElement>

const TextInput: React.FC<Props> = ({label, className, name, ...rest}) => {
  const {formState: {errors}, register} = useFormContext();

  const error = errors?.[name];

  console.log(errors, 'iakjndgfad')
  
  return <label className={clsx(
    "flex flex-col text-sm font-medium",
    error && "text-red-500",
    className
  )}>
    <div>
      <span>{label}</span>
      <span className="text-sm italic ml-2" hidden={!error}>{`-  ${error?.message}`}</span>
    </div>
    <Input error={error} {...rest} {...register(name, {required: true})}  />
  </label>
};


export default TextInput
