import React from 'react'

export default function Spacer() {
    return (
        <>
            <div className='w-[160px]'>
                <div className='flex flex-row'>
                    <div className='h-[640px] w-[640px] flex flex-col'>
                        <div className='h-[640px] border-b-2 border-black'></div>
                    </div>
                    <div className='h-[640px] w-[640px] flex flex-col'>
                        <div className='h-[640px] border-b-2 border-black'></div>
                    </div>
                </div>          
             
            </div>

            
        </>
    )
}