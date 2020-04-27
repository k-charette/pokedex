import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import PokemonInfo from '../components/PokemonInfo'

const PokemonInfoContainer = (props) => {
        const id = props.match.params.id
        const { loading, error, data: { pokemon = [] } = {} } = useQuery(POKEMON_INFO, {
            variables: {id}
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
    return (
        <div>
            <PokemonInfo id={pokemon.id} name={pokemon.name}/>
        </div>
    )
}

const POKEMON_INFO = gql`
    query pokemon($id: String) {
        pokemon(id: $id){
            id
            name
        }
    }
`

export default PokemonInfoContainer