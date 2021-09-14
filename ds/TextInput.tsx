import React, { InputHTMLAttributes } from 'react'

type Props = {}

const TextInput = React.forwardRef<
  HTMLInputElement, 
  InputHTMLAttributes<HTMLInputElement> & Props
  >(({...rest}, ref) => (
  <input  ref={ref}  {...rest} />
));


export default TextInput
