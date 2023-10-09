import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/20/solid'

const solutions = [
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

export default function DropdownMenu({ title, sebLevel }) {
  return (
    <Popover className="relative w-[320px]">
      {({ open }) => (
        <>
          {/* <Popover.Button
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
          </Popover.Button> */}

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute bg-red-300 left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
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
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
