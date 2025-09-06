import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-5 '>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-20 flex items-center px-7 border-white rounded-full uppercase'>
        <Link className='text-[6vw]' to='/projects'>Projects</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-20 flex items-center px-7 border-white rounded-full uppercase'>
        <Link className='text-[6vw]' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText