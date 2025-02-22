import React from 'react'
import MainHeader from '../../Components/Websites/Header/MainHeader'
import CategoryNavbar from '../../Components/Websites/Header/CategoryNavbar'
import SubNavbar from '../../Components/Websites/Header/SubNavbar'
import Landing from './Landing'

const website = () => {
    return (
        <div className='flex flex-col gap-[10px] md:gap-5 xl:gap-7'>
            <MainHeader />
            <SubNavbar />
            <CategoryNavbar />
            <Landing />
        </div>
    )
}

export default website