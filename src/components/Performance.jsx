import React from 'react'
import styled from 'styled-components'
import {GoCheck} from "react-icons/go";
export default function Performance() {
  return (
    <Section>
        <div className="performance">
            <div className='perform'>
                <h3>Performance</h3>
                <GoCheck/>
            </div>
            <div className='percentage'>
            <div className="content">
                <h1>76%</h1>
                <h5> Income</h5>
            </div>
            <div className="spend">  
                  <h1>44%</h1>
                <h5>Spending </h5>
                </div>
            </div>
               <div className="content-text">
                 <div className='text'>
                 <GoCheck/>
                 <span>Spending course was taken</span>
                 </div>
                <div className='text'>
                <GoCheck/>
                 <span>Deposit programs was setup</span>
                </div>
                <div className='text'>
                <GoCheck/>
                 <span>Cashback program activated</span>
                </div>
               </div>

            </div>
        
    </Section>
  )
}

const Section = styled.section`
margin-left: 18vw;
padding: .5rem;
.performance{
  width:19rem;
    min-height: 26rem;
   background-color: #212121;
   color: white;
   border-radius: 30px;
   text-align: center;
   .percentage{
    display: flex;
    justify-content: space-around;
    margin-top: 2rem
   }
   .perform{
    padding: 2rem;
    display: flex;
    justify-content: space-between;

   }
   .content-text{
    margin-top: 3rem;
    .text{
     padding: 1rem
    }
   }
   
}

`; 
