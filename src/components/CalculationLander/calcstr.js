import React, { useState } from 'react';
import { MDBInput, MDBRow, MDBCol, MDBBtnGroup } from 'mdb-react-ui-kit';
import { allcalc } from '../Calculations/cstr.js';
import './calc.css';
import Head from '../Header/header.js';
import cstrImg from '../../assets/cstr_calc_page.jpg';


const Cstr = ()=> {
    const [result,setResult] = useState([0,0,0]);
    const handleClick = ()=>{
        let conv = document.getElementById('conv').value;
        let vol = document.getElementById('volre').value;
        let aplha = document.getElementById('orre').value;
        let temp = document.getElementById('temp').value;
        let Ea = document.getElementById('actv').value;
        let initca = document.getElementById('initca').value;
        setResult(allcalc(initca,vol,conv,temp,aplha,Ea));
    }
  return (
    <>
    <Head title = {"Continuous Stirred Reactor"} subitle = {"Reaction Enginnering"} photo = {cstrImg}/>
    <div className='calcualtion__grid'>
      <MDBRow>
      <h6>Enter the following details:</h6>
        <MDBCol>
        <MDBInput id='conv' label='Conversion'  type='text' />
        </MDBCol>
        <MDBCol>
        <MDBInput id='initca' label='Inital Concentration(mol/L)'  type='text' />
        </MDBCol>
        <MDBCol>
        <MDBInput id='volre' label='Volumetric Flow Rate(m^3/hr)' type='text' />
        </MDBCol>
        <MDBCol>
        <MDBInput id='actv' label='Activation Energy(kJ/mol)' type='text' />
        </MDBCol>
        <MDBCol>
        <MDBInput id='orre' label='Order of the reaction' type='text' />
        </MDBCol>
        <MDBCol>
        <MDBInput id='temp' label='Enter the temperature(K)' type='text' />
        </MDBCol>
      </MDBRow>
      </div>
      <MDBBtnGroup className='btn__click' onClick={handleClick}>Go</MDBBtnGroup>

      <div className='result__grid'>
        <div>Concentration of A: {result[0].toFixed(3)} mol</div>
        <div>Volume of the Reactor: {result[1].toFixed(3)} m^3</div>
        <div>Space Time: {result[2].toFixed(3)}s</div>
      </div>
    </>
  );
}
export default Cstr;