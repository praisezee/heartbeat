import React from 'react'
import {BsWhatsapp, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Icon = () => {
  return (
    <div className='icons'>
    <Link to='https://instagram.com/'>
    <BsInstagram className='mb-2 text-red-400'/>
    </Link>
    <Link to='https://wa.me/qr/YNYM3B4JHU6FH1'>
    <BsWhatsapp className='mt-2 text-green-500'/></Link>
    </div>
  )
}

export default Icon
