import React from 'react'

const PokemonsList = ({ data }) => {
    return (
        <div>
           <p>{data.name}</p>
        </div>
    )
}

export default PokemonsList