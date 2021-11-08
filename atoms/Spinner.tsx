import React from 'react'

interface Props {
  size?: number;
}

const Spinner = ({size = 10}: Props) => {
  return (
    <div className={`w-${size} h-${size} rounded-3xl border border-gray-700 m-auto`}>
      <div className={`w-${size} h-${size} rounded-3xl border-t border-gray-300 animate-spin`}></div>
    </div>
  )
}

export default Spinner
