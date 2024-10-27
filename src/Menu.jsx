import React from 'react'

const Menu = ({menuName,className}) => {
  return (
   <ul>
    <li className={`font-pop font-medium text-center ${className}`}>{menuName}</li>
   </ul>
  )
}

export default Menu
