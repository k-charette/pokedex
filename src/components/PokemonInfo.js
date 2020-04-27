import React from 'react'

const PokemonInfo = ({name, image, heightMin, heightMax, fastAtks, specialAtks, classification, resistant, types}) => {
    return (
        <div>
           {name}
           <img className='m-auto h-24 w-24' src={image} alt={name}/>

           Minimum Height: {heightMin}
           Maximum Height: {heightMax}

           {
               fastAtks.map(atk => {
               return <div key={`${atk.name} - ${atk.damage}`}> {atk.name}</div>
               })
           }

            {
               specialAtks.map(atk => {
               return <div key={`${atk.name} - ${atk.damage}`}> {atk.name}</div>
               })
           }

           Classification: {classification}

           Resistant: {resistant}

           Types: {types}
        </div>
    )
}

export default PokemonInfo