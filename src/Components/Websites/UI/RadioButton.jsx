import React from 'react';

const RadioButton = ({ label, value, name, checked, onChange ,className }) => {
    return (
        <div className={`  ${className}  lg:w-1/2 h-full flex justify-center items-center `}>
            <label className='flex items-center md:gap-2 lg:gap-5 text-primary text-[16px] lg:text-[20px]  w-full h-full'>
                <input
                    type='radio'
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    className='hidden peer'
                />
                <div className='w-full text-center h-[50px] md:h-[60px] lg:h-[76px] border md:border-2 border-border text-[12px] md:text-[14px] lg:text-[20px] text-placeholder 
                 rounded-10px py-2 px-4 cursor-pointer peer-checked:border-primary peer-checked:text-primary flex justify-center items-center'>
                    {label}
                </div>
            </label>
        </div>
    );
};

export default RadioButton;