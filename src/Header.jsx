import React from 'react'
import { NavBar } from './NavBar'
import { Cards } from './Cards'
import { Table } from './Table'
import Chart from './Chart'
import Example from './PieChart'

export const Header = () => {
    return (
        <div className="relative flex min-h-screen flex-col bg-slate-50">
            <div className="flex ">
                <div className='max-sm:hidden'>
                    <NavBar />
                </div>
                <div className='flex-1'>
                    <div className='flex justify-between my-4 '>
                        <div className='px-8 text-neutral-800 font-semibold flex drop-shadow-sm mr-4'><p className='mr-2 '>Hello I am Sanchitha S</p><img src='/hello.png' className='w-7 h-6' width={25} height={''} alt='image'></img></div>
                        <div className="flex  justify-center lg:justify-end">
                            <div className="w-full px-2 lg:px-6 drop-shadow-sm m-4 ">
                                <label htmlFor="search" className="sr-only">Search projects</label>
                                <div className="relative text-gray-400 focus-within:text-gray-400">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input id="search" name="search" className="block w-full rounded-md border bg-white bg-opacity-25 py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Search projects" type="search" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Cards />
                    <div className='flex justify-evenly items-center'>
                        <div className='w-[26rem]'>
                            <Chart />
                        </div>
                        <div className='w-48 drop-shadow-md shadow-md rounded-md'>
                            <div className='p-4'><h3 className='text-neutral-800 font-bold'>Custemers</h3> <p className='text-slate-200'>custemer of the year</p></div>
                            <Example />
                        </div>
                    </div>

                    <Table />
                </div>
            </div>
        </div>)
}
