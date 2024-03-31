import React, {useState} from 'react'
import ClientCard from './ClientCard'
import { Button } from '../Shadcncomponents/ui/button'
import { IoSearch } from 'react-icons/io5'
import AddNewClient from './AddNew'

const ClientDetails = () => {
  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      address: '123 Main St, City, Country',
      status: 'active',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      address: '456 Elm St, Town, Country',
      status: 'inactive',
    },
    {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      address: '789 Oak St, Village, Country',
      status: 'active',
    },
  ]

  const [addNew, setAddNew] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-10/12 h-auto flex justify-center m-1 mb-5">
          <input className={`h-10 w-9/12 mx-1 p-1 px-2 border border-2-black rounded-lg`} placeholder="Search" />
          <Button className="h-10 w-auto mb-5 mx-1">
            <IoSearch />
          </Button>
          <AddNewClient/> 
        </div>

        <div className={`flex flex-col h-auto border border-2-gray w-10/12 rounded-md`}>
          {/* div for headings */}
          <div className={`h-[5rem] w-full flex justify-between px-1`}>
            <div
              className={`flex h-full w-3/12 justify-center items-center text-gray-500 text-md md:text-lg font-semibold`}
            >
              <p>Name</p>
            </div>
            {/* -- */}
            <div
              className={`flex h-full w-3/12 justify-start items-center text-gray-500 text-md md:text-lg font-semibold`}
            >
              <p className={`ml-10`}>Email</p>
            </div>
            {/* -- */}
            <div
              className={`flex h-full w-3/12 justify-start items-center text-gray-500 text-md md:text-lg font-semibold`}
            >
              <p className={`ml-5`}>Address</p>
            </div>
            {/* -- */}
            <div
              className={`flex h-full w-3/12 justify-center items-center text-gray-500 text-md md:text-lg font-semibold`}
            >
              <p>Status</p>
            </div>

            {/* all items div */}
          </div>
          {/* main div */}

          {users.map(userData => (
            <ClientCard user={userData} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ClientDetails
