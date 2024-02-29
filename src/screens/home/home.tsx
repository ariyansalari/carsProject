import React from 'react'
import { CustomFilterHome, Hero, SearchBarHome } from './partials';

const HomeScreen = () => {
  return (
    <div>
<Hero/>
<div className='padding-x padding-y max-width mt-12' id="discover">
  <div className='home__text-container'>
<h1 className='text-4xl font-extrabold' >Car Catalogue</h1>
<p>Explore the cars you might like</p>
  </div>
<div className='home__filters'>
  <SearchBarHome/>
  <div className='home__filter-container'>
    <CustomFilterHome title="fuel"/>
    <CustomFilterHome title="year"/>

  </div>

</div>
</div>
    </div>
  )
}

export default HomeScreen;