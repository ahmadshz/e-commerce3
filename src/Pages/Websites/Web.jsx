import React from 'react'
import Footer from '../../Components/Websites/Footer/Footer'
import Landing from './Landing'

const Web = () => {
    return (
        <div className='flex flex-col gap-[10px] md:gap-5 xl:gap-7'>
            <Landing />
            <Footer />
        </div>
    )
}

export default Web