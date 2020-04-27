import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/get-pokemons'
import PokemonsList from '../components/PokemonsList'

const PokemonsContainer = () => {
    const {loading, error, data: { pokemons = [] } = {}} = useQuery(GET_POKEMONS, {
        variables: {first: 9}
    })

    if (loading) return <div>Loading now...</div>
    
    if (error) {
        return (
            <>
                <div>Everything is broken...</div> 
                {error.message}
            </>
        )
    }
    return(
        <div className='w-full flex flex-row flex-wrap flex-grow px-6 py-12 bg-white'>
            {
            pokemons && pokemons.map((pokemon) => 
                <PokemonsList key={pokemon.id} data={pokemon} />
            ) 
            }
        </div>
    )
}

export default PokemonsContainer