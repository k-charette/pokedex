import React from 'react'

const Search = () => {
    return(
        <>
            <div className='bg-white shadow flex p-2'>
                <input className='w-full rounded p-2' type='text' placeholder='Search...'/>
                <button className='bg-blue-300 hover:bg-blue-200 rounded text-white p-2 pl-4 pr-4'>
                    <p className='font-semibold text-xs'> Search </p>
                </button>
            </div>
        </>
    )
}

export default Search