import React from 'react'
import MainHeader from '../../Components/Websites/Header/MainHeader'
import Footer from '../../Components/Websites/Footer/Footer'
import BarMobile from '../../Components/Websites/UI/BarMobile'
import Landing from './Landing'

const Web = () => {
    return (
        <div className='flex flex-col gap-[10px] md:gap-5 xl:gap-7'>
            <MainHeader />
            <Landing />
            <Footer />
            <BarMobile />
        </div>)
}

export default Web