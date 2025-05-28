import React from 'react'
import add from '../../../assets/HeadersIcon/2.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ButtonAddMobile = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="fixed w-full md:hidden bottom-0 "
    >
        <Link
            to="/addpost"
            className="h-[55px] bg-primary text-white text-[16px] flex items-center justify-center gap-3"
        >
            أضــــــــــف إعــــــــــلان
            <img className="w-8 mt-1" src={add} alt="" />
        </Link>
    </motion.div>
    
    )
}

export default ButtonAddMobile
