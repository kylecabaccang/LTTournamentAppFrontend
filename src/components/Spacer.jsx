import React from 'react'

export default function Spacer() {
  return (
    <>
      <div className='w-[160px]'>
        <div className='h-[30px]'></div>
        <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-black'></div>
                    <div className='h-[40px] border-r-2 border-black '></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px] border-r-2 border-b-2 border-black'></div>
                    <div className='h-[40px]'></div>
                </div>
                <div className='h-[80px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>

            <div className='flex flex-row'>
                
                <div className='h-[50px] w-[80px] flex flex-col'>
                    <div className='h-[40px]'></div>
                    <div className='h-[40px]'></div>
                </div>
            </div>  
            
        </div>
    </>
  )
}