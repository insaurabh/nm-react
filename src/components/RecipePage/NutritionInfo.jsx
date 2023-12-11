import React, { useState } from 'react'

function NutritionInfo({ nutrition }) {
    const [showNutrition, setShowNutrition] = useState(false);

    const clickHandler = () => {
        setShowNutrition(!showNutrition)
    }
    return (
        <div className="">
            <div className='accordion header flex cursor-pointer' onClick={clickHandler}>
                <span className='text-lg font-bold' >Nutrition Info</span>
                <span className='ml-3'>{showNutrition ? 'Hide Info -' : 'View Info +'}</span>
            </div>
            {showNutrition && <div className='body'>
                {
                    Object.entries(nutrition).map(([key, value]) => {
                        if (key !== 'updated_at') {
                            return (
                                <div key={key}>
                                    <span className='pr-3 capitalize'>{key}</span>
                                    <span className='font-bold'>{value}</span>
                                </div>
                            )
                        }
                    })
                }
            </div>}
        </div>
    )
}

export default NutritionInfo