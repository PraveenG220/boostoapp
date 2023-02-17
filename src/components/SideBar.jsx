import React, { useState } from 'react'
import styled from 'styled-components'

import { MdImportExport, MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Ceoimage from "../images/Ellipse 5.png"
export default function SideBar() {
  const [dashcolor, setDashcolor] = useState(1)
  return (
    <>
      <Section>
        <div className='top'>
          <div className='brand'>
         <h2>boosto</h2>
          </div>
            <div className='ceoimage'>
              <div><img src={Ceoimage} alt="" /></div>
              <h3>Praveen Kumar</h3>
               <p>CEO</p>
            </div>
          <div className='toggle'></div>
          <div className='links'>
             <ul>
               <li className={dashcolor === 1? "active" : " "}
               onClick={()=> setDashcolor(1)}
               ><a href="#"> 
               <MdSpaceDashboard />
               <span> Dashboard</span>
               </a></li>
               <li className={dashcolor === 2? "active" : " "}
               onClick={()=> setDashcolor(2)}
               ><a href="#"> 
               <RiDashboard2Fill />
               <span> Customers</span>
               </a></li>
               <li className={dashcolor === 3? "active" : " "}
               onClick={()=> setDashcolor(3)}
               ><a href="#"> 
               <FaAddressCard />
               <span> Solutions</span>
               </a></li>
               <li className={dashcolor === 4? "active" : " "}
               onClick={()=> setDashcolor(4)}
               ><a href="#"> 
               < IoSettings />
               <span> Settings</span>
               </a></li>
             </ul>
          </div>
        </div>
        <div className="exits">
          <a href="#">
            <FiLogOut/>
            <span className='exits'> Exits</span>
          </a>
        </div>
      </Section>
    </>
  )
}


const Section = styled.section`

position: fixed;
left: 0;
background-color: #fff;
height: 100vh;
width: 18vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0;
gap: 2rem;

.top {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width 100%;
  .toggle {
    display: none;
  }
  .brand {
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .ceoimage{
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p{
    color: gray;
    padding: 0.2rem 0.2rem;
    border-radius: 0.6rem;
    background-color:#fff;
  }
  }

  .links {
    display: flex;
    justify-content: center;
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: lightgray;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: black;
        }
      }
      .active {
        background-color:lightgray;
        a {
          color: black;
        }
      }
    }
  }
}
.exits {
  padding: 0.3rem 1rem;
  border-radius: 0.6rem;
  &:hover {
    background-color: #da0037;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: black;
  }
}
`;
