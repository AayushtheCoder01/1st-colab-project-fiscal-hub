import React, { useState } from 'react'
import EditCard from './EditCard'

const ClientCard = ({ user }) => {
  const { name, email, address, status } = user
  const [edit, setEdit] = useState(false)
  return (
    <>
      <div
        onMouseEnter={() => setEdit(true)}
        onMouseLeave={() => setEdit(false)}
        key={name}
        className={`flex h-auto border border-2-gray py-4`}
      >
        <div className={`flex h-full w-3/12 px-1 items-center text-sm md:text-lg`}>
          <p className="mx-auto text-center">{name}</p>
        </div>
        {/* -- */}
        <div className={`flex h-full w-3/12 justify-start items-center text-sm md:text-lg`}>
          <p className={`ml-2`}>{email}</p>
        </div>
        {/* -- */}
        <div className={`flex h-full w-3/12 justify-start items-center text-sm md:text-lg`}>
          <p className=''>{address}</p>
        </div>
        {/* -- */}
        <div className={`flex h-full w-3/12 justify-center items-center text-sm md:text-lg`}>
          <p>{status}</p>
        </div>

        {edit ? (
          <div className={`flex h-full text-sm md:text-lg relative pr-5 cursor-pointer`}>
              {<EditCard user={user}/>}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default ClientCard
