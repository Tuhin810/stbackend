import React from 'react'
import PricingCard from '../../../shared/pricingCard/PricingCard'

const RecruiterPricing = () => {
    return (
        <div id='recruiterPricing'>
            <div className='flex flex-row flex-wrap items-center justify-around min-h-screen space-y-4'>
                    <PricingCard />
                    <PricingCard />
                    <PricingCard />
            </div>
        </div>
    )
}

export default RecruiterPricing
