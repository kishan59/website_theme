import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
        <h1 className='tagline mb-6 text-center text-n-1/50'>Helpting people create beautiful content at</h1>
        <ul className='flex'>
            {companyLogos.map((logo, index) => (
                <li className='flex items-center justify-center flex-1 h-[8.5rem]' key={index}>
                    <img src={logo} width={134} height={28} alt={logo} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CompanyLogos