import React from 'react'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <div className='flex bg-grey-600 p-4 gap-6 justify-center uppercase'>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  )
}

export default Navbar