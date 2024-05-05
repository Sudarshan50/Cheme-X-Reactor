import React from 'react'
import{Routes ,Route,Navigate} from "react-router-dom"
import Home from '../Home/home'
import Cstr from '../CalculationLander/calcstr.js'
import Pfr from '../CalculationLander/calpfr.js'
import PackedBed from '../CalculationLander/calpbr.js';
import BatchReactor from '../CalculationLander/calbatch.js'
import AboutPro from '../About/About.js'
import Team from '../Team/team.js'



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cstr" element={<Cstr/>}/>
      <Route path="/plugf" element={<Pfr/>}/>
      <Route path="/pbr" element={<PackedBed/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/batch" element={<BatchReactor/>}/>
      <Route path="/about" element={<AboutPro/>}/>
    </Routes>
  )
}

export default Router