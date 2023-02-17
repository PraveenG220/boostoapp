import React from 'react'
import styled from 'styled-components'
import Performance from './Performance';
import Activity from './Activity';
import Engagement from './Engagement';

export default function Dashbord() {
  return (
    <Section>
      <div className='grid'>
         <div className="upperrow">
             <div className='performance'><Performance/></div>
             <div className='activity'> <Activity/></div>
         </div>
         <div className="lowerrow">
           <Engagement/>
         </div>
      </div>
    </Section>
  )
}


const Section = styled.section`
width: 100%
margin-left: 18vw;
background-color: lightgray;
border-radius: 2rem;
.grid{
  // width: 100%


  .upperrow{
    display: flex;
  }


  }
 

`;