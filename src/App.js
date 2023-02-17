import React from 'react'
import styled from "styled-components";
import Dashbord from './components/Dashbord';
import SideBar from './components/SideBar';

export default function App() {
  return (
    <Div>
     <SideBar/>
     <Dashbord/>
    </Div>
  )
}

const Div = styled.div``;
