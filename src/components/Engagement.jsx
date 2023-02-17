import React from 'react'
import styled from 'styled-components'

export default function Engagement() {
  return (
    <Section>
        <div className='contains'>
              <div className='engage'>
              <div className='text'>
                    <h3>Engagement</h3>
                      <p>General  statistics  of <br /> user <strong>engagement</strong><br />processes</p>
              </div>
              </div>
        <div className='main'>
            <div className='progress'>
                <div className='reports'>
                    <h4>This Day</h4>
                    <h1>133</h1>
                </div>
            </div>
            <div className='progress'>
                <div className='reports'>
                <h4>This Week</h4>
                 <h1>471</h1>
                </div>
            </div>
            <div className='progress'>
                <div className='reports'>
                <h4>This Month</h4>
                 <h1>929</h1>
                </div>
            </div>
            <div className='progress'>
                 <div className='reports'>
                 <h4>Pending</h4>
                 <h1>233</h1>
                 </div>
            </div>
            <div className='progress metrics'>
                <div className='reports'>
                  <h4>Your New <br />Metrics</h4>
                   
                </div>
            </div>
        </div>
        </div>
    </Section>
  )
}


const Section = styled.section`
// width:100%;
background-color: #f3b3b3;
min-height:15rem;
margin-left: 19vw;
margin-right: 2.5vw;
border-radius: 20px;


.contains{
  padding: 0.6rem 0.7rem;
  display: flex;
  gap:1rem;     
}
.engage{
  margin-top: .5rem;
  .text{
      h3{
        padding: 2rem;
      }
      p{
        padding-left: 1.5rem
      }
  }
 }
.main{
  display: flex;
  .progress{
    width:10rem;
    min-height: 10rem;
    background-color: white;
    justify-content: space-between;
    margin-top: 2.5rem;
    text-align: center;
    border-radius: 25px;
     &:nth-child(2){
      margin-left: 1rem;
      margin-right:  1rem;
     }
     &:nth-child(4){
      margin-left: 1rem;
      margin-right:  1rem;
     } 
  }
  .reports{
    margin-top: 1rem;
    h4{
      padding: 2.5rem 1rem;
    }

  }
  .metrics{
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  }
 
}
`;