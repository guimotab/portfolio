import { MdOutlineMailOutline } from 'react-icons/md'
import { MdWhatsapp } from 'react-icons/md'
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

const Contacts = () => {
    return (
        <section id='contacts' className="flex flex-col w-full py-3 mb-10 gap-3">
            <h1 className="font-bold text-2xl dark:text-gray-200">Contato</h1>
            <div className='flex gap-1'>
                <div className='bg-cor-terciaria h-[10.5rem] w-1 mx-2 dark:bg-cor-darkHover'></div>
                <div className='flex flex-col gap-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <MdWhatsapp className='w-7 h-7 dark:text-gray-200' />
                        <p className="font-medium text-lg dark:text-gray-200">(69) 99268-7447</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdOutlineMailOutline className='w-7 h-7 dark:text-gray-200' />
                        <p className="font-medium text-lg dark:text-gray-200">guimota22@gmail.com</p>
                    </div>
                    <a href="https://www.linkedin.com/in/guimotab/" className="flex items-center gap-3" target='_blank' >
                        <BsLinkedin className='w-7 h-7 dark:text-gray-200' />
                        <p className='font-medium text-lg dark:text-gray-200'>linkedin/in/guimotab</p>
                    </a>
                    <a href='https://github.com/guimotab' target='_blank' className="flex items-center gap-3">
                        <BsGithub className='w-7 h-7 dark:text-gray-200' />
                        <p className='font-medium text-lg dark:text-gray-200'>github.com/guimotab </p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contacts