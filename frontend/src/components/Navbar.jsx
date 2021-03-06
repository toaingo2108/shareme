import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdSearch } from 'react-icons/io'

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
    const navigate = useNavigate()

    if (!user) return null

    return (
        <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 bg-white">
            <div className="flex justify-start items-center w-full px-4 rounded-full bg-gray-100 border-none outline-none focus-within:shadow-sm">
                <IoMdSearch fontSize={21} className="ml-1" />
                <input
                    type="text"
                    className="p-2 w-full bg-gray-100 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search"
                    onFocus={() => navigate('/search')}
                />
            </div>
            <div className="flex gap-3">
                <Link
                    to={`user-profile/${user?._id}`}
                    className="hidden md:block w-12 h-12">
                    <img
                        src={user.image}
                        alt="userImage"
                        className="rounded-full"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
