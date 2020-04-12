import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/get-pokemons'
import PokemonsList from '../components/PokemonsList'

const PokemonsContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: {first: 30}
    })
    return(
        <div className='flex flex-wrap m-auto md:m-32 justify-around grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-6 py-4'>
            {
            pokemons && pokemons.map((pokemon) => 
                <PokemonsList key={pokemon.id} data={pokemon} />
            )
            }
        </div>
    )
}

export default PokemonsContainer