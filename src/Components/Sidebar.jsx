import logo from '../assets/Images/lws-logo-en.svg'
import dashBoard from '../assets/Images/sidebarIcons/dashBoard.svg'
import project from '../assets/Images/sidebarIcons/project.svg'
import contact from '../assets/Images/sidebarIcons/contact.svg'
import kanban from '../assets/Images/sidebarIcons/kanban.svg'
import messages from '../assets/Images/sidebarIcons/messages.svg'
import calender from '../assets/Images/sidebarIcons/Calender.svg'
import settings from '../assets/Images/sidebarIcons/setting.svg'
const Sidebar = () => {
  return (
    <>
      <aside className='hidden w-64 bg-gray-800 p-6 lg:block'>
        <div className='mb-8 flex items-center'>
          <div className='flex items-center justify-center rounded-full text-xl font-bold'>
            <img src={logo} className='mx-auto h-10 text-center' />
          </div>
        </div>
        <button className='mb-8 w-full rounded-md bg-green-500 py-2 text-white'>
          + New Project
        </button>
        <nav>
          <ul className='space-y-4'>
            <li>
              <a href='#' className='flex items-center'>
                <img className='w-6 me-2' src={dashBoard} alt='' />
                Dashboard
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center'>
                <img className='w-6 me-2' src={project} alt='' />
                Projects
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center'>
                <img className='w-6 me-2' src={contact} alt='' />
                Contact
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center'>
                <img className='w-6 me-2' src={kanban} alt='' />
                Kanban
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center'>
                <img className='w-6 me-2' src={calender} alt='' />
                Calendar
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center'>
                <img className='w-6 me-2' src={messages} alt='' />
                Messages
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center'>
                <img className='w-6 me-2' src={settings} alt='' />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
