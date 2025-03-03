import React from 'react'
import MainHeader from '../../Components/Websites/Header/MainHeader'
import LandingCategory from '../../Components/Websites/UI/LandingCategory'
import Footer from '../../Components/Websites/Footer/Footer'
import BarMobile from '../../Components/Websites/UI/BarMobile'

const website = () => {

    return (
        <div className='flex flex-col gap-[10px] md:gap-5 xl:gap-7'>
            <MainHeader />
            <LandingCategory />
            <Footer />
            <BarMobile />
        </div>
    )
}

export default website