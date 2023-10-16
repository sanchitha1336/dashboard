import React from 'react'

export const Cards = () => {
    return (
        <div className="text-gray-700 body-font">
            <div className="px-5 py-12 mx-auto">

                <div className="grid md:max-lg:grid-cols-2 max-md:grid-cols-1 lg:max-xl:grid-cols-2 xl:grid-cols-3 grid-cols-4 gap-4 w-full text-center">
                    <div className="p-4  w-72">
                        <div className="flex justify-between shadow-md drop-shadow-sm  px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                          <div className='rounded-full bg-green-100 flex items-center p-2'>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-8 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                            </svg>
                            </div>
                            <div>
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Downloads</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4  w-72">
                        <div className="flex justify-between shadow-md drop-shadow-sm  px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                          <div className='rounded-full bg-purple-100 flex items-center p-2'>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-8 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                            </svg>
                            </div>
                            <div>
                            <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                            <p className="leading-relaxed">Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4  w-72">
                        <div className="flex justify-between shadow-md drop-shadow-sm  px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                          <div className='rounded-full bg-sky-100 flex items-center p-2'>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-8 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                            </svg>
                            </div>
                            <div>
                            <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                            <p className="leading-relaxed">Files</p></div>
                        </div>
                    </div>
                    <div className="p-4  w-72">
                        <div className="flex justify-between shadow-md drop-shadow-sm  px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                          <div className='rounded-full bg-pink-100 flex items-center p-2'>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-8 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            </div>
                            <div>
                            <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                            <p className="leading-relaxed">Places</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
