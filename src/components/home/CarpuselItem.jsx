import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PRODUCTS_ROUTE } from '../../constants/routes'

export default function CarpuselItem({label,imageSrc}) {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 items-center sm:px-10  md:px-20 lg:px-40 py-20 gap-4">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl font-bold text-white ">{label}</h1>
                    <p className="text-white text-xl text-start ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odit expedita alias fugit consequatur nihil cumque, cum rem in numquam?</p>
                    <Link to={PRODUCTS_ROUTE} className="flex gap-2 items-center justify-center bg-black text-white font-semibold px-4 py-2 rounded-xl drop-shadow-2xl"
                    >Shop now <FaArrowRight color="white" width={20} /> </Link>
                </div>
                <img src={imageSrc}  />
            </div>
  )
}
