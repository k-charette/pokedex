import React from 'react'
import Search from '../components/Search'

const Header = () => {
    return (
        <div>
            <header className='w-full bg-gray-900 px-6'>
                <div className='container mx-auto max-w-4xl py-6 flex justify-between items-center'>
                    <div className='w-full md:w-1/2 text-center md:text-left mb-4 flex flex-wrap justify-start text-blue-400'>
                        Pokedex
                    </div>
                    <div className='md:p-0'>
                        <Search />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header