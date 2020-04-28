import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

const Header = () => {
    return (
        <div>
            <header className='w-full bg-gray-900 px-6'>
                <div className='container mx-auto py-6 flex flex-wrap justify-between items-center'>
                <Link to='/'>
                    <div className='w-full md:w-1/2 mx-auto text-center md:text-left mb-4 justify-start text-blue-400 text-2xl'>
                        Pokedex
                    </div>
                </Link>
                    <div className='w-full md:w-1/2 md:p-0'>
                        <Search />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header