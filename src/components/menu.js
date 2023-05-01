import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export const Menu = () => {
  const [menuItem,setMenuItem]=useState('')
  useEffect(()=>{
    debugger;
      let pathName=window.location.pathname
      setMenuItem(pathName.slice(1) || 'home')
  },[])
  const fnMenuClick=(eve)=>{
       setMenuItem(eve.target.id)
  }
  return (
    <ul className='menu'>
      <li >
        <Link id='home' className={menuItem=='home' && 'active-menu'} onClick={fnMenuClick} href="/home">Home</Link>
      </li>
      <li>
        <Link id='about' className={menuItem=='about' && 'active-menu'} onClick={fnMenuClick} href="/about">About Us</Link>
      </li>
      <li>
        <Link id='contact' className={menuItem=='contact' && 'active-menu'} onClick={fnMenuClick} href="/contact">Contact</Link>
      </li>
    </ul>
  )
}
