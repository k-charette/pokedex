import React from 'react'

const PokemonInfo = ({name, image, heightMax, weightMax, fastAtks, specialAtks, classification, resistant, types}) => {

    function convertToLbs() {
        const weightKg = parseFloat(weightMax)
        let pounds = Math.floor(weightKg * 2.2046)

        return pounds
    }

    function convertToFeet(){
        const heightM = parseFloat(heightMax)
        const feet = (heightM * 3.280).toFixed(1)

        return feet
    }

    convertToFeet()
    return (
        <div>
           {name}
           <img className='m-auto h-24 w-24' src={image} alt={name}/>
           Height: {heightMax}

           {
               convertToFeet(heightMax)
           }
           "

          
           Weight: {weightMax}
        
           {
               convertToLbs(weightMax)
           }
           lbs

           {
               fastAtks.map(atk => {
               return <div key={`${atk.name} - ${atk.damage}`}> {atk.name}</div>
               })
           }

            {
               specialAtks.map(atk => {
               return <div key={`${atk.name} - ${atk.damage}`}> {atk.name}</div>
               })
           }

           Classification: {classification}

           Resistant: {resistant}

           Types: {types}
        </div>
    )
}

export default PokemonInfo