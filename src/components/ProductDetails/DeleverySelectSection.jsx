import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { PaperAirplaneIcon, } from '@heroicons/react/20/solid'

const mailingLists = [
  { id: 1, title: 'Sea', icon: (checked)=> <PaperAirplaneIcon
  className={classNames(!checked ? 'text-gray-600' : 'text-fuchsia-600', 'h-10 w-10 text-fuchsia-600')}
  aria-hidden="true"
/>, delay: '621 delay' },
  { id: 2, title: 'Air', icon: (checked)=> <PaperAirplaneIcon
  className={classNames(!checked ? ' text-gray-600' : 'text-fuchsia-600', 'h-10 w-10')}
  aria-hidden="true"
/>, delay: '1200 delay' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DeliverySelectSection = () => {
    const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className="text-base font-medium text-gray-900">Select delivery method</RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-fuchsia-500 ring-2 ring-fuchsia-500' : '',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-md font-medium text-gray-900">
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="mt-1 mx-auto flex items-center text-sm text-gray-500">
                      {mailingList.icon(active)}
                    </RadioGroup.Description>
                    <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                      {mailingList.delay}
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-fuchsia-600')}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-fuchsia-500' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

export default DeliverySelectSection