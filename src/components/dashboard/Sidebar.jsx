import { useLayoutEffect, useState } from 'react'
import { AiOutlineLogout, AiFillCodeSandboxCircle } from 'react-icons/ai'
import linksList from './Links'
import { SiAccusoft } from 'react-icons/si'
export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1)
    useLayoutEffect(() => {
        setCurrentLink(() => +window.location.hash.slice(1, 2) || 1)
    }, [])
    return (
        <section className='fixed flexp flex-col w-[10%] h-[82%] shadow justify-between  py-5 overflow-hidden w-side bg-sideBackG'>
            <div>
                <div className='flex items-center justify-center gap-1 mb-5 text-sm text-blue-700 '>
                <img height={'50px'} width={'50px'} src="images/icon128.png" alt="" />
            <span className="ms-1 font-bold">Privacy Pro</span>
                </div>
                <div className='w-[80%] mx-auto ' >
                    <ul className='flex flex-col gap-2 links' >
                        {
                            linksList.map(ele => (
                                <li onClick={() => setCurrentLink(ele.id)} className={currentLink === ele.id ? "sideLink active" : "sideLink"} key={ele.id} >
                                    <a href={`#${ele.id + ele.link}`} >
                                        {ele.icon()}
                                        <span className='overflow-hidden text-nowrap'>{ele.title}</span>
                                    </a>
                                </li>
                            )

                            )
                        }
                    </ul>
                </div>
            </div>
           
                  
        </section >
    )
}
