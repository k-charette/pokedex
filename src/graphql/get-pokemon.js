import gql from 'graphql-tag'

export const GET_POKEMON = gql`
    query pokemon($name: String) {
        pokemon(name: $name){
            id
            name
            number
            image
            classification
            height{
                maximum
            }
            weight {
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