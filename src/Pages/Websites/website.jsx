import React from 'react'
import Home from './Home'
import MainHeader from '../../Components/Websites/Header/MainHeader'
import CategoryNavbar from '../../Components/Websites/Header/CategoryNavbar'
import SubNavbar from '../../Components/Websites/Header/SubNavbar'

const website = () => {
    return (
        <div className='flex flex-col gap-7'>
            <MainHeader />
            <SubNavbar />
            <CategoryNavbar />
            <Home />
        </div>
    )
}

export default website