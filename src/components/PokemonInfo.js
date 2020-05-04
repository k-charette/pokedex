import React from 'react'

const PokemonInfo = ({name, image, number, heightMax, weightMax, fastAtks, specialAtks, classification, resistant, types}) => {

    function convertToLbs() {
        const weightKg = parseFloat(weightMax)
        let pounds = Math.floor(weightKg * 2.2046)

        return pounds
    }

    function convertToFeet(){
        const heightM = parseFloat(heightMax)
        const feet = Math.floor(heightM * 3.280)
        const inches = Math.floor(heightM % 12)
    
        return feet + "'" + inches + "\""
    }

    convertToFeet()
    return (
        <div className='relative'>
            <h2 className='pt-8 text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>{name}</h2>
            <div className='relative mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
                <div className='relative'>
                    <img className='mx-auto h-50 w-50' src={image} alt={name}/>
                </div>
                <div className='mt-10 mx-4 relative lg:mt-0'>
                    Height: {heightMax} / 

                            {
                                convertToFeet(heightMax)
                            }
                            feet

                            <br/>
                            Weight: {weightMax}

                            {
                                convertToLbs(weightMax)
                            }
                            lbs
                            {number}
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
            </div>
        </div>
    )
}

export default PokemonInfo