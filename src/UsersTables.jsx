import React from 'react'
import HearderGo from './components/HearderGo'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import FilterSelect from './components/FilterSelect'
import UserTable from './components/UserTable'
import PaginationCard from './tailwind/application-ui/navigation/pagination/PaginationCard'

const UsersTables = () => {
  return (
    <>
        <HearderGo />
        <div className="w-full px-10 " >
        <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end mx-6">
              {/* Search section */}
              <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-500">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </div>

              { /** Filter section */ }
              <FilterSelect />
          </div>
          <UserTable />
          <PaginationCard />
        </div>
    </>
  )
}

export default UsersTables