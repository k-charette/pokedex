import gql from 'graphql-tag'

export const GET_POKEMON = gql`
    query pokemon($id: String) {
        pokemon(id: $id){
            id
            name
            image
            classification
            height{
                minimum
                maximum
            }
            weight {
                minimum
                maximum
            }
            types
            resistant
            evolutions {
                id
            }
            evolutionRequirements{
                name
                amount
            }
            maxHP
            maxCP
            attacks {
                fast{
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
            }
        }
    }
`