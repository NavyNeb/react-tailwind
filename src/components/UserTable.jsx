import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

const people = [
    {
        name: 'Lindsay Walton',
        phone: '758362649',
        email: 'lindsay.walton@example.com',
        balance: '374 038 CFA',
        orders: '04',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        phone: '758362649',
        email: 'lindsay.walton@example.com',
        balance: '374 038 CFA',
        orders: '04',
        image:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        phone: '758362649',
        email: 'lindsay.walton@example.com',
        balance: '374 038 CFA',
        orders: '04',
        image: null
    },
    // More people...
]

const UserTable = () => {
  return (
      <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                              <tr>
                                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                      Name
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                      Phone
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                      Email
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                      Genres
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                      Recto CNI
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                      Verso CNI
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                                      Statut
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                              {people.map((person) => (
                                  <tr key={person.email}>
                                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                          <div className="flex items-center">
                                              <div className="h-10 w-10 flex-shrink-0">
                                                  <img className="h-10 w-10 rounded-md" src={person.image} alt="" />
                                              </div>
                                              <div className="ml-4">
                                                  <div className="font-medium text-gray-900">{person.name}</div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className="text-gray-500">{person.phone}</div>
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                          <div className="text-gray-900">{person.email}</div>
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                          <div className="text-gray-900">{person.balance}</div>
                                      </td>
                                      <td className="whitespace-nowrap px-3 text-center py-4 text-sm text-gray-500 ">
                                          <div className="max-w-[138px] h-20 border-dashed rounded-md border-gray-400 border-2 p-1 mx-auto " >
                                                { person?.image ? <img className="h-full w-full object-cover rounded-md" src={person.image} alt="" /> : <p className='font-medium text-md text-gray-400 text-center' >Aucune image</p>}
                                          </div>
                                      </td>
                                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500 ">
                                        <div className="max-w-[138px] h-20 border-dashed rounded-md border-gray-400 border-2 p-1 mx-auto " >
                                            { person?.image ? <img className="h-full w-full object-cover rounded-md" src={person.image} alt="" /> : <p className='font-medium text-md text-gray-400 text-center' >Aucune image</p>}
                                        </div>
                                      </td>
                                      <td className="flex flex-row items-center justify-evenly relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center ">
                                                <XMarkIcon className="w-6 h-6 text-white" />
                                          </div>
                                          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center ">
                                                <CheckIcon className="w-6 h-6 text-white" />
                                          </div>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default UserTable