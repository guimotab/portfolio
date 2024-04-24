import { MdOutlineMailOutline } from 'react-icons/md'
import { MdWhatsapp } from 'react-icons/md'
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

const Contacts = () => {
  const links = [
    {
      href: "https://wa.me/5569992687447",
      icon: MdWhatsapp,
      text: "(69) 99268-7447"
    }, {
      href: "https://www.linkedin.com/in/guimotab/",
      icon: BsLinkedin,
      text: "linkedin/in/guimotab"
    }, {
      href: "https://github.com/guimotab",
      icon: BsGithub,
      text: "github.com/guimotab"
    },
  ]
  return (
    <section id='contacts' className="flex flex-col w-full py-3 mb-10 gap-3">
      <h1 className="font-bold text-2xl dark:text-gray-200">Contato</h1>
      <div className='flex gap-1'>
        <div className='bg-primary h-[10.5rem] w-1 mx-2 dark:bg-cor-darkHover'></div>
        <div className='flex flex-col gap-3 py-2'>
          {links.map(link =>
            <a key={link.href} href={link.href} className="flex items-center gap-3 hover:underline dark:decoration-white" rel="noreferrer" target='_blank' >
              <link.icon className='w-7 h-7 dark:text-gray-200' />
              <p className="font-medium text-lg dark:text-gray-200">{link.text}</p>
            </a>
          )}
          <div className='flex items-center gap-3'>
            <MdOutlineMailOutline className='w-7 h-7 dark:text-gray-200' />
            <p className="font-medium text-lg dark:text-gray-200">guimota22@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts