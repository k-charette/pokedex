import React from 'react'

const PokemonsList = ({ data }) => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='text-blue-500 text-center px-2 py-1'>{data.name}</div>
            <div className='flex justify-between text-blue-500 px-2 py-1'>
                <span className='text-right'> HP - {data.maxHP} </span>
                <span className='text-left'> CP - {data.maxCP} </span>
            </div>
            <div className='py-4'>
                <img className='m-auto h-24 w-24' src={data.image} alt={data.name}/>
            </div>
            <div className='flex flex-wrap justify-around text-blue-500 pl-8 pr-8 sm:pl-4 sm:pr-4'>
                {
                    data.attacks.special.slice(0, 3).map((attack) => {
                        return <span 
                        className='text-sm pl-6 pr-6 pb-1 sm:p-4 md:pb-4' key={`${attack.name} - ${attack.damage}`}>{attack.name}</span>
                    })
                }
            </div>
        </div>
    )
}

export default PokemonsList