import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMON } from '../graphql/get-pokemon'
import PokemonInfo from '../components/PokemonInfo'

const PokemonInfoContainer = () => {
    const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON, {
        variables: {id: "UG9rZW1vbjowMDE="}
    })

    return (
        <div>
            <PokemonInfo id={pokemon.id} name={pokemon.name}/>
        </div>
    )
}

export default PokemonInfoContainer