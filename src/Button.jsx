import React from 'react'

const Button = ({btnText,classname}) => {
  return (
    <button className={`font-pop font-medium ${classname}`}>
      {btnText}
    </button>
  )
}

export default Button
