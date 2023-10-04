import React from 'react';
import NavigationBar from '../components/NavigationBar';

export default function tournamentInput() {


    return (
        <div>
            <NavigationBar />
            <section className="h-screen">
                <div className="h-full">
                    
                    

                            {/* <!-- Right column container --> */}
                            <div className="h-full flex justify-center items-center my-auto">
                                <form>
                                <h1 class="mb-6 text-5xl font-bold">Add a tournament</h1>
                                    {/* <!-- Email input --> */}
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="text"
                                            className="border-grey border peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] pt-[1.50rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlInput2"
                                            placeholder="Email address" />
                                        <label
                                            for="exampleFormControlInput2"
                                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >Tournament Name:
                                        </label>
                                    </div>

                                    {/* TOURNAMENT TYPE SELECTION */}
                                    <div className='relative mb-6 ml-3' data-te-select-init>
                                        <label className='text-gray-500'>
                                            Tournament Type:
                                            <select className='border-black border ml-3'>
                                                <option value="1">Single Elimination</option>
                                                <option value="2">Double Elimination</option>
                                            </select>
                                        </label>
                                    </div>

                                    {/* TOURNAMENT TYPE SELECTION */}
                                    <div className='relative mb-6 ml-3' data-te-select-init>
                                        <label className='text-gray-500'>
                                            Bracket Size:
                                            <select className='border-black border ml-3'>
                                                <option value="1">16</option>
                                                <option value="2">32</option>
                                                <option value="3">64</option>
                                                <option value="4">128</option>
                                                <option value="5">256</option>
                                                <option value="6">512</option>
                                            </select>
                                        </label>
                                    </div>

                                    {/* BRACKET SIZE INPUT */}
                                    <div class="relative mb-3" data-te-input-wrapper-init>
                                        <textarea
                                            class="border-inherit border peer block min-h-[300px] w-full rounded bg-transparent px-3 py-[0.32rem] pt-[1.50rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            placeholder="Your message"></textarea>
                                        <label
                                            for="exampleFormControlTextarea1"
                                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        >Input participants</label>
                                    </div>



                                    {/* <!-- Login button --> */}
                                    <div className="text-center lg:text-left">
                                        <button
                                            type="button"
                                            className="w-[100%] inline-block rounded bg-zinc-800 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            CREATE TOURNAMENT
                                        </button>


                                    </div>
                                </form>
                            </div>
                    </div>
            </section>



        </div>
    );
}