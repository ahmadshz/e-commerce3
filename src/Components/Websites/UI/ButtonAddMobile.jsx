import React, { useEffect, useState } from 'react';
import add from '../../../assets/HeadersIcon/2.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ButtonAddMobile = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 50;
      setIsAtBottom(scrollPosition >= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className={`${isAtBottom ? '' : 'fixed bottom-0'} w-full md:hidden z-50`}
    >
      <Link
        to="/addpost"
        className="h-[55px] bg-primary text-white text-[16px] flex items-center justify-center gap-3"
      >
        أضــــــــــف إعــــــــــلان
        <img className="w-8 mt-1" src={add} alt="" />
      </Link>
    </motion.div>
  );
};

export default ButtonAddMobile;
