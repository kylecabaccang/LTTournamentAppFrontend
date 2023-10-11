import React from 'react'
import NavigationBar from '../components/NavigationBar';

function home() {
  return (
    <>
        <NavigationBar/>
        <div className='my-[15%]'>
            <div className='text-4xl text-center'>THIS IS THE HOMEPAGE.</div>
            <div className='text-4xl text-center'>PLACE ANYTHING YOU WANT HERE (eg. Advertisements, Web App Patch Notes, etc.)</div>
        </div>
    </>
  )
}

export default home