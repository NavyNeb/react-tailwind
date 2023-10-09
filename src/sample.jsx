import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/20/solid'
import { ClickAwayListener } from '@mui/material'

const solutions = [
  { name: 'Blog', description: 'Learn about tips, product updates and company culture.', href: '#' },
  { name: 'Blog', description: 'Learn about tips, product updates and company culture.', href: '#' },
  { name: 'Blog', description: 'Learn about tips, product updates and company culture.', href: '#' },
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums of contact support.',
    href: '#',
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Events', description: 'Check out webinars with experts and learn about our annual conference.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sample() {

  const [showLevelTwo, setShowLevelTwo] = useState(false);
  const [showLevelThree, setShowLevelThree] = useState(false);
  const [showLastLevel, setShowLastLevel] = useState(false);

  const handleCloseAll = (state) =>{
    setShowLastLevel(false);
    setShowLevelThree(false);
    setShowLevelTwo(false);
  }


  return (
    <ClickAwayListener onClickAway={handleCloseAll} >
    <div className='bg-purple-400 flex flex-row items-center ' >
      <Popover className="relative w-[320px] ml-11">
        {({ open }) => (
          <>
            <Popover.Button
              onClick={handleCloseAll}
              className={classNames(
                open ? 'text-white' : 'text-gray-100',
                'group inline-flex items-center rounded-md w-[300px] bg-fuchsia-600  text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              )}
            >
              <Bars3Icon
                className={classNames(open ? 'text-white' : 'text-white', 'ml-2 h-8 w-8 group-hover:text-white')}
                aria-hidden="true"
              />
              <span className='font-semibold text-xl ml' >Solutions</span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                <div className="overflow-scroll no-scrollbar h-[600px] rounded-tl-md rounded-bl-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <div onMouseEnter={()=>{
                    setShowLevelThree(false)
                    setShowLastLevel(false)
                    setShowLevelTwo(true)}}
                        // onMouseLeave={()=>setShowLevelTwo(false)} 
                        onH
                        className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        
                        className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                      >
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <Popover className="relative w-[320px] bg-orange-600">
        <>
            { showLevelTwo && 
            <Popover.Panel className="absolute bg-white left-1/2 z-10 mt-[30px] w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0" static >
              <div className="overflow-scroll border-t border-b no-scrollbar h-[600px] drop-shadow-md ring-opacity-5">
                <div 
                onMouseEnter={()=>{
                  setShowLastLevel(false);
                  setShowLevelThree(true)}}
                // onMouseLeave={()=>setShowLevelThree(false)} 
                className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>}
         
        </>
      </Popover>
      <Popover className="relative w-[320px] bg-orange-600">
        <>
            { showLevelThree && <Popover.Panel className="absolute bg-white left-1/2 z-10 mt-[30px] w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0" static >
              <div className="overflow-scroll border-t border-b no-scrollbar h-[600px] drop-shadow-md ring-opacity-5">
                <div 
                onMouseEnter={()=>setShowLastLevel(true)}
                className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>}
        </>
      </Popover>
      <Popover className="relative w-[320px] bg-orange-600">
        <>
            { showLastLevel && <Popover.Panel className="absolute bg-white left-1/2 z-10 mt-[30px] w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0" static >
              <div className="overflow-scroll no-scrollbar h-[600px] rounded-tr-md rounded-br-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                    >
                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>}
         
        </>
      </Popover>
    </div>
    </ClickAwayListener>
  )
}
