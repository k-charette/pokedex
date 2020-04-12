import gql from 'graphql-tag'

export const GET_POKEMON = gql`
    query pokemon($id: String) {
        pokemon(id: $id){
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`