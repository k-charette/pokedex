import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/get-pokemons'
import PokemonsList from '../components/PokemonsList'

const PokemonsContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: {first: 9}
    })
    return(
        <div>
            {
            pokemons && pokemons.map((pokemon) => 
                <PokemonsList key={pokemon.id} data={pokemon} />
            )
            }
        </div>
    )
}

export default PokemonsContainer