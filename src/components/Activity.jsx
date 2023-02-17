import React from 'react'
import styled from 'styled-components'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const data = [
    { 
      name: "sa",
      data: 4000,
    },
    { 
      name: "sa",
      data: 4000,
    },
    {
      name: "Mo",
      data: 3000,
    },
    {
      name: "tu",
      data: 4000,
    },
    {
      name: "we",
      data: 6000,
    },
    {
      name: "thu",
      data: 3300,
    },
    {
      name: "fr",
      data: 4000,
    },
    {
      name: "sat",
      data: 5000,
    }
]

export default function Activity() {
  return (
    <Section>
      <div className='active-progress'>
          <div className="info">
            <div className='active-menu'>
                <ul>
                    <li><a href="#">Activity</a></li>
                    <li><a href="#">Clicks</a></li>
                    <li><a href="#">Sales</a></li>
                </ul>
            </div>
            <div className='week-select'>
            <select className='set-week'>
                <option value="0">Week </option>
                <option value="1">sa</option>
                <option value="2">mo</option>
                <option value="3">tu</option>
                <option value="4">we</option>
                <option value="5">th</option>
                <option value="6">fri</option>
                <option value="6">sat</option>
                </select>
            </div>
          </div>
          <div className='updates'>
                <p>Your data updates <br /> every <strong> 3 hours</strong></p>   
            </div>
      
      <div className="chart">
        <ResponsiveContainer height="100%" width="100%">
            <AreaChart 
             width={600} 
             height={400}
             data={data}
             margin={{top:0, left:0, right: 0, bottom: 0}}
             >
              <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="name" axisLine={false} />
                
                <Tooltip cursor={false} />
                <Area 
                animationBegin={1000}
                animationDuration={8000}
                type="monotone"
                dataKey="data"
                stroke= "#ffff"
                fill='#b8d7f2'
                strokeWidth={3}
                />
             </AreaChart>
        </ResponsiveContainer>
        </div>
      </div>
    </Section>
  )
}


const Section = styled.section`
padding: 0.5rem;
.active-progress{
    border-radius: 30px;
    min-height: 19rem;
    background-color: #1ad4dc;
    margin-top: 0.1rem
 }
 .info {
  padding: 1rem;
 display: flex;
 justify-content: space-between;
 .active-menu{
   padding:2px;
   ul{
    display:flex;
    li{
      list-style: none;
      padding: 0.6rem 1rem;
        border-radius: 0.6rem;
      &:hover {
        background-color: lightgray;
      }
      a{
        text-decoration: none;
        color: black;
        font-weight: bold;
      }
    }
   }
 }
}
.week-select{
        padding: 0.1rem 0.6rem;
        .set-week{
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          background-color: black;
          color: white;
        }
       
}
.updates{
  padding: 1.5rem
}
 
 .chart{
  width: 46rem;
  height: 16rem;
 }

`;