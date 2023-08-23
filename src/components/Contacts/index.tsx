import { MdOutlineMailOutline } from 'react-icons/md'
import { MdWhatsapp } from 'react-icons/md'
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

const Contacts = () => {
    return (
        <section id='contacts' className="flex flex-col w-full py-3 mb-10">
            <h1 className="font-bold text-xl ">Contato</h1>
            <div className='flex'>
                <div className='bg-cor-terciaria h-28 w-1 mx-2'></div>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-3'>
                        <MdOutlineMailOutline className='' size={22} />
                        <p className="">guimota22@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdWhatsapp className='' size={22} />
                        <p className="">(69) 99268-7447</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <BsLinkedin className='' size={22} />
                        <a className="" target='_blank' >fazer...</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <BsGithub className='' size={22} />
                        <a href='github.com/guimotab' target='_blank' className="">github.com/guimotab</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts