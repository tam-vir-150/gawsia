import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example({title, items}) {
  return (
    <Menu as="div" className="relative inline-block text-left uppercase">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 hover:underline hover:underline-offset-4 duration-200 uppercase">
          {title}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {
            items.map((item, index) => (
                <MenuItem key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  {item}

                </a>
              </MenuItem>
            ))
          }
          
        </div>
      </MenuItems>
    </Menu>
  )
}
