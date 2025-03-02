import React from 'react'
import MainHeader from '../../Components/Websites/Header/MainHeader'
import Landing from './Landing'
import Footer from '../../Components/Websites/Footer/Footer'
import BarMobile from '../../Components/Websites/UI/BarMobile'

const website = () => {
    
    
    return (
        <div className='flex flex-col gap-[10px] md:gap-5 xl:gap-7'>
            <MainHeader />
            <Landing />
            <Footer />
            <BarMobile />
        </div>
    )
}

export default website