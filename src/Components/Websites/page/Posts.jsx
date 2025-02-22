import img from '../../../assets/download.jpeg'
import price from '../../../assets/iconpost/1.svg'
import pricesy from '../../../assets/iconpost/3.svg'
import clock from '../../../assets/iconpost/6.svg'
import person from '../../../assets/iconpost/7.svg'

const Posts = () => {
    return (
        <div className='bg-[#FAFAFA] w-full h-[110px] md:h-[140px] lg:h-[160px] flex  '>
            <div className=' w-2/4 xl:w-3/5 flex flex-col justify-between md:py-2 pr-2  md:pr-[10px] xl:pr-[20px]'>
                <h1 className=' text-[17px] md:text-[21px] xl:text-[25px] font-semibold'>كورولا 2013 تجديد وكالة </h1>
                <h1 className='text-[13px] md:text-[15px] xl:text-[21px] font-normal text-placeholder'>دمشق</h1>
            </div>
            <div className=' w-2/4 xl:w-2/5  flex '>
                <div className='w-3/5 md:py-2  flex flex-col md:justify-between text-placeholder text-[10px] md:text-[17px] xl:text-[21px] font-semibold'>
                    <div className='flex  gap-1 md:gap-2 items-center'>
                        <img className='w-4 md:w-5 lg:w-6' src={price} alt='' />
                        <div className='py-0' >20,000</div>
                    </div>
                    <div className='flex gap-1 md:gap-2 items-center'>
                        <img className='w-4 md:w-5 lg:w-6' src={pricesy} alt='' />
                        <div className='py-0' >260,040,000</div>
                    </div>
                    <div className='flex gap-1 md:gap-2 items-center'>
                        <img className='w-4 md:w-5 lg:w-6' src={clock} alt='' />
                        <div className='py-0' >قبل ساعة</div>
                    </div>
                    <div className='flex gap-1 md:gap-2 items-center'>
                        <img className='w-4 md:w-5 lg:w-6' src={person} alt='' />
                        <div className='py-0'>أبو خالد</div>
                    </div>
                </div>
                <div className=' w-2/5 '>
                    <img className='h-full' src={img} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Posts
