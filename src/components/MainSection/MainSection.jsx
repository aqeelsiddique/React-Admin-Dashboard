import React from 'react';
import '../MainSection/MainSection.css'
import Cards from './Cards/Cards';
import Table from '../Table/Table'


function MainSection() {
  return (
    <div className='MainSection'>
        <h1>DASHBOARD</h1>
        <Cards/>
        <Table/>

        

    </div>
  )
}

export default MainSection