import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Websites/Header/Navbar'
import { MdArrowBack } from 'react-icons/md'

const SuccessVerification = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='container flex flex-col md:gap-7 pt-56'>
                <p className='text-[16px] md:text-[20px] lg:text-[25px] font-semibold text-primary  '>
                    ﻣﺒﺮوك, ﻟﻘﺪ ﺗﻢ ﺗﺴﺠﻴﻠﻚ ﻛﺪﻻّل ﺟﺪﻳﺪ ﻓﻲ ﺑﺮﻧﺎﻣﺞ دﻻّل
                </p>
                <Link
                    to={'/'}
                    className='flex items-center gap-5    mt-4'>
                    <MdArrowBack className=' text-[45px] md:text-[40px]  lg:text-[45px]'  />
                    <p className='text-[12px] md:text-[16px] lg:text-[20px] font-semibold'>
                        اﻧﻘﺮ ﻫﻨﺎ ﻟﻠﺬﻫﺎب اﻟﻰ اﻟﺼﻔﺤﺔ اﻟﺮﺋﻴﺴﻴﺔ و ﺿﻊ ﻣﻌﻠﻮﻣﺎت ﺣﺴﺎﺑﻚ اﻟﺠﺪﻳﺪ ﻓﻲ ﺧﺎﻧﺔ اﻟﺪﺧﻮل اﻟﻤﻮﺟﻮدة ﻓﻲ أﻋﻠﻰ اﻟﺼﻔﺤﺔ
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default SuccessVerification
