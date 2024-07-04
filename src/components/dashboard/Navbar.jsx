
import { BiSearch } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineCaretDown } from 'react-icons/ai'
// import avatar from '../assets/avatar.avif'
import avatar from '../../assets/avatar.avif'
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between mt-[1rem] bg-white">
            <div>
                <h1 className='ml-[.5rem] font-bold'>Dashboard</h1>
            </div>
            <div className='flex items-center mr-[.5rem] '>
                <div className='flex items-center px-2 py-2 mr-3 text-sm text-gray-500 rounded-md bg-blue-100/50 text-thin'>
                    <AiOutlineCalendar className='mr-2 text-sm font-bold' />
                    May 5th, 2024
                </div>




                <div className='after:rounded-md relative  after:content-[""] after:absolute after:h-[90%] after:w-[2px] after:top-[50%] after:-translate-y-[50%] after:bg-black after:right-2'>

                    <BiSearch className='font-bold mr-[1.5rem] 
                    ' />
                </div>
                <div className=' relative after:content-[""] after:rounded-md  after:absolute after:h-[90%] after:w-[2px] after:top-[50%] after:-translate-y-[50%] after:right-3 after:bg-black'>

                    <AiOutlineBell className='relative font-extrabold mr-[1.5rem] ' />
                </div>
                <img src={avatar} alt="" className='w-[35px]  rounded-full cursor-pointer ' />
                <AiOutlineCaretDown className='ml-3' />
            </div>

        </nav>
    )
}
