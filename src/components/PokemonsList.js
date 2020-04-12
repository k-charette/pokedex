import React from 'react'

const PokemonsList = ({ data }) => {
    console.log(data)
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
            <div className='flex justify-between text-blue-500 px-2 py-1'>
                {
                    data.attacks.special.map((attack) => {
                        return <span key={`${attack.name} - ${attack.damage}`}>{attack.name}</span>
                    })
                }
            </div>
        </div>
    )
}

export default PokemonsList