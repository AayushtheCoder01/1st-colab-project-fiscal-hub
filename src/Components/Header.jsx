import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../Shadcncomponents/ui/avatar'

const Header = () => {
  return (
    <div className={`flex h-10 w-full h-auto`}>
      <div className={`flex w-4/12 justify-start items-center p-1 px-2 pl-5 py-2`}>
        <h1 className="text-xl md:text-3xl font-semibold">
          <span className="font-bold text-green-500">Fiscal</span>
          Hub
        </h1>
      </div>

      <div className={`flex w-4/12 py-2`}></div>

      <div className={`flex w-4/12 justify-end items-center p-1 px-2 pr-5 py-2`}>
        <h3 className="text-sm mr-1 sm:mr-4 md:text-xl bg-gray-200 p-1 px-2 rounded-lg">100</h3>
        <div className="mx-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <h3 className="text-sm md:text-xl">{`Satyam Kumar`}</h3>
      </div>
    </div>
  )
}

export default Header
