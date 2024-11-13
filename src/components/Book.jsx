import React from 'react'
import { Link } from 'react-router-dom'

export const Book = () => {
  return (
    <div className='' >
        <Link to={"/"}>
            <div className=' md:text-[60%] sm:text-[60%] py-3 px-5 rounded-full bg-blue-400 font-inter font-semibold min-[420px]:p-2 min-[420px]:text-[70%]  sm:py-3 sm:px-5 text-white '>Request Quote</div>
        </Link>
    </div>
  )
}
