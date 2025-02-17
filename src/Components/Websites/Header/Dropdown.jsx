import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { MdPerson } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";

const Dropdown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left md:hidden">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white ">
                    <MdPerson size={25} />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-primary text-right"
                        >
                            Account
                        </Link>

                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-primary text-right"
                        >
                            Support
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-primary text-right"
                        >
                            License
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            to={'/login'}
                            className=" flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-primary text-right"
                        >
                            <div >تسجيل الدخول</div>    <RiLogoutCircleLine size={20} />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            to={'/register'}
                            className=" flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-primary text-right"
                        >
                            <div > انشاء حساب</div>    <HiUserAdd size={20} />
                        </Link>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}

export default Dropdown