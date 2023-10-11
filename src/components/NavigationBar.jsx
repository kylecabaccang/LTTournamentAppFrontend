import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function NavigationBar() {
    // Check if an access_token exists in local storage
    const hasUserKey = localStorage.getItem('user') !== null;

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');

        navigate('/');
    }

    return (
        
    // < !--Main navigation container-- >
        <nav
            className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                {/* <!-- Hamburger button for mobile view --> */}
                <button
                    className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#navbarSupportedContent8"
                    aria-controls="navbarSupportedContent8"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    {/* <!-- Hamburger icon --> */}
                    <span className="[&>svg]:w-7">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-7 w-7">
                            <path
                                fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>

                {/* <!-- Collapsible navbar container --> */}
                <div
                    className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
                    id="navbarSupportedContent8"
                    data-te-collapse-item>
                    {/* <!-- Left links --> */}
                    <ul
                        className="list-style-none flex flex-col pl-0 lg:mt-1 lg:flex-row"
                        data-te-navbar-nav-ref>
                        {/* <!-- Home link --> */}
                        <li
                            className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                            data-te-nav-item-ref>
                            <a
                                className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                aria-current="page"
                                href="/home"
                                data-te-nav-link-ref
                            >Home</a>
                        </li>

                        {!hasUserKey && (
                            <li
                                className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    aria-current="page"
                                    href="/"
                                    data-te-nav-link-ref
                                >Login</a>
                            </li>
                        )}

                        {hasUserKey && (
                            <>
                                {/* <!-- Link --> */}
                                <li
                                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                    data-te-nav-item-ref>
                                    <a
                                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                        href="/tournament-input"
                                        data-te-nav-link-ref
                                    >Add Tournament</a>
                                </li>

                        
                                <li
                                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                    data-te-nav-item-ref>
                                    <a
                                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                        href="/admin"
                                        data-te-nav-link-ref
                                    >Manage Users</a>
                                </li>

                       
                                <li
                                    className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                    data-te-nav-item-ref>
                                    <a
                                        className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                        href="#"
                                        onClick={handleLogout}
                                        data-te-nav-link-ref
                                    >Logout</a>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>



  )
}
