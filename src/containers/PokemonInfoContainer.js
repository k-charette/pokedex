import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMON } from '../graphql/get-pokemon'
import PokemonInfo from '../components/PokemonInfo'

const PokemonInfoContainer = (props) => {
        const name = props.match.params.name
        const { loading, error, data: { pokemon = [] } = {} } = useQuery(GET_POKEMON, {
            variables: {name}
        }) 

        if (loading) return <div>Loading now...</div>
    
        if (error) {
            return (
                <>
                   {`Error Will Robinson ${error.message}`}
                </>
            )
        }
           
    return (
        <div className='container mx-auto relative max-w-xl px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl'>
            <PokemonInfo 
                id={pokemon.id} 
                number={pokemon.number}
                name={pokemon.name}
                image={pokemon.image}
                classification={pokemon.classification}
                types={pokemon.types}
                resistant={pokemon.resistant}
                heightMax={pokemon.height.maximum}
                weightMax={pokemon.weight.maximum}
                fastAtks={pokemon.attacks.fast}
                specialAtks={pokemon.attacks.special}
            />
        </div>
    )
}
export default PokemonInfoContainer