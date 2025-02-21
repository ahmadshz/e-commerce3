import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Websites/Header/Navbar'
import arrow from '../../assets/Icons_Arrow/1.svg'

const SuccessVerification = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='container flex flex-col gap-7 pt-56'>
                <p className='text-xl lg:text-2xl font-bold text-primary  '>
                    ﻣﺒﺮوك, ﻟﻘﺪ ﺗﻢ ﺗﺴﺠﻴﻠﻚ ﻛﺪﻻّل ﺟﺪﻳﺪ ﻓﻲ ﺑﺮﻧﺎﻣﺞ دﻻّل
                </p>
                <Link
                    to={'/'}
                    className='flex items-center gap-5 text-md lg:text-2xl font-bold   mt-4'>
                    <svg xmlns={arrow} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"></svg>
                    <p>
                        اﻧﻘﺮ ﻫﻨﺎ ﻟﻠﺬﻫﺎب اﻟﻰ اﻟﺼﻔﺤﺔ اﻟﺮﺋﻴﺴﻴﺔ و ﺿﻊ ﻣﻌﻠﻮﻣﺎت ﺣﺴﺎﺑﻚ اﻟﺠﺪﻳﺪ ﻓﻲ ﺧﺎﻧﺔ اﻟﺪﺧﻮل اﻟﻤﻮﺟﻮدة ﻓﻲ أﻋﻠﻰ اﻟﺼﻔﺤﺔ
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default SuccessVerification
