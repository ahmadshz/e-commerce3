import React from 'react';

const RadioButton = ({ label, value, name, checked, onChange ,className }) => {
    return (
        <div className={`  ${className}  lg:w-1/2 h-full flex justify-center items-center`}>
            <label className='flex items-center gap-2 text-primary text-[16px] lg:text-[20px]  w-full h-full'>
                <input
                    type='radio'
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    className='hidden peer'
                />
                <div className='w-full text-center h-[60px] md:h-[76px] ring-2  text-[16px] lg:text-[20px] text-placeholder ring-border rounded-10px py-2 px-4 cursor-pointer peer-checked:ring-primary peer-checked:text-primary flex justify-center items-center'>
                    {label}
                </div>
            </label>
        </div>
    );
};

export default RadioButton;