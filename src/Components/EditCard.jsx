import React, { useState, useRef } from 'react'
import { MdOutlineEdit } from 'react-icons/md'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../Shadcncomponents/ui/sheet'
import { Button } from '../Shadcncomponents/ui/button'
import { Input } from '../Shadcncomponents/ui/input'
import { Label } from '../Shadcncomponents/ui/label'
const EditCard = ({ user }) => {
  const { name, email, address, status } = user
  const [newData, setNewData] = useState({
    newName: name,
    newEmail: email,
    newAddress: address,
    newStatus: status,
  })

  return (
    <Sheet>
      <SheetTrigger>
        <MdOutlineEdit />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-5 items-center gap-1">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                onChange={e => {
                  setNewData({
                    ...newData,
                    newName: e.target.value,
                  })
                }}
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-5 items-center gap-1">
              <Label className="text-right">Email</Label>
              <Input
                onChange={e => {
                  setNewData({
                    ...newData,
                    newEmail: e.target.value,
                  })
                }}
                id="emeil"
                className="col-span-3"
              />
            </div>
            {/* -- */}
            <div className="grid grid-cols-5 items-center gap-1">
              <Label className="text-right">Address</Label>
              <Input
                onChange={e => {
                  setNewData({
                    ...newData,
                    newAddress: e.target.value,
                  })
                }}
                id="address"
                className="col-span-3"
              />
            </div>
            {/* -- */}
            <div className="grid grid-cols-5 items-center gap-1">
              <Label className="text-right">Status</Label>
              <Input
                onChange={e => {
                  setNewData({
                    ...newData,
                    newStatus: e.target.value,
                  })
                }}
                id="status"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex w-full h-auto justify-center p-1 m-1">
            <Button>Change</Button>
          </div>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            You are changing your client details permanently in Database.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default EditCard
