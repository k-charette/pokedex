import React from 'react'
import { Link } from 'react-router-dom'

const PokemonsList = ({ data }) => {
    return (
        <div className='container w-full md:w-1/3 xl:w-1/3 rounded shadow-lg'>
            <Link to={'/info/'+data.id}>
            <div className='mx-auto text-center my-4 mx-4 w-full flex flex-col'>{data.name}  - #{data.number}
                <div className='w-full flex flex-wrap'>
                    <div className='flex w-1/2'> 
                        <p className='mx-auto leading-normal'>HP - {data.maxHP}</p> 
                    </div>
                    <div className='flex w-1/2'> 
                        <p className='mx-auto leading-normal'>CP - {data.maxCP}</p> 
                    </div>  
                </div>
                <img className='m-auto h-24 w-24' src={data.image} alt={data.name}/>
                {
                    data.attacks.special.slice(0, 3).map((attack) => {
                        return <span 
                        className='' key={`${attack.name} - ${attack.damage}`}>{attack.name}</span>
                    })
                }
            </div>
            </Link>
        </div>
    )
}

export default PokemonsList