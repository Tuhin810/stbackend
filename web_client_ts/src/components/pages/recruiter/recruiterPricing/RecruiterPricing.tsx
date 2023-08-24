import React from 'react'
import PricingCard from '../../../shared/pricingCard/PricingCard'

const RecruiterPricing = () => {
    return (
        <div id='recruiterPricing'>
            <div className='flex flex-row justify-around align-middle min-h-screen p-4 mt-4'>
                    <PricingCard />
                    <PricingCard />
                    <PricingCard />
            </div>
        </div>
    )
}

export default RecruiterPricing
