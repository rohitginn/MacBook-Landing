import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    return (
        <header>
            <nav className=' flex items-center justify-center gap-10 '>
                <img  className='md:justify-between' src={import.meta.env.BASE_URL + 'logo.png'} alt="Apple Logo" />

                <ul className=''>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className='flex-center gap-6'>
                    <button>
                        <img src={import.meta.env.BASE_URL + 'search.svg'} alt="Search" />
                    </button>


                    <button>
                        <img src={import.meta.env.BASE_URL + 'cart.svg'} alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar