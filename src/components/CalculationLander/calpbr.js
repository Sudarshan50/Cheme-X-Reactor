import React, { useState } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtnGroup } from "mdb-react-ui-kit";
import "./calc1.css";
import { pbr } from "../../Calculations/pbr.js";
import Head from "../Header/header.js";
import pbrImg from "../../assets/pbr_calc_page.jpg";

const PackedBed = () => {
  const [result, setResult] = useState([0, 0, 0,0]);
  const handleClick = () => {
    const a = document.getElementById("aval").value;
    const b = document.getElementById("bval").value;
    const c = document.getElementById("cval").value;
    const d = document.getElementById("dval").value;
    const voidfraction = document.getElementById("voidfrac").value;
    const Po = document.getElementById("pnot").value;
    const Diam = document.getElementById("Diamter").value;
    const dens = document.getElementById("density").value;
    const vel = document.getElementById("velocity").value;
    const viscos = document.getElementById("viscosity").value;
    const conversion = document.getElementById("conv").value;
    const Zval = document.getElementById("Z").value;
    const alp = document.getElementById("alpha").value;
    const Evalue = document.getElementById("Ea").value;
    const temperature = document.getElementById("temp").value;
    const cnot = document.getElementById("canot").value;
    const denscaty = document.getElementById("denscat").value;
    const Vo = document.getElementById("volfo").value;
    const res = pbr(voidfraction,
      Diam,
      dens,
      vel,
      viscos,
      Po,
      conversion,
      Zval,
      a,
      b,
      c,
      d,alp, 
      Evalue,
      temperature,
      cnot,
      denscaty,
      Vo)
    setResult([res[0], res[1], res[2],res[3]]);

  };
  return (
    <>
      <Head
        title={"Packed Bed Reactor"}
        subtitl={"Reaction Coordinates"}
        photo={pbrImg}
      />
      <div className="sticho__entry">
        <MDBRow>
          <h6>Enter the stoichiometric details:</h6>

          <MDBCol>
            <MDBInput id="aval" label="a" type="text" required />
          </MDBCol>
          <MDBCol>
            <MDBInput id="bval" label="b" type="text" required />
          </MDBCol>
          <MDBCol>
            <MDBInput id="cval" label="c" type="text" required />
          </MDBCol>
          <MDBCol>
            <MDBInput id="dval" label="d" type="text" required />
          </MDBCol>
        </MDBRow>
      </div>
      <div className="calcualtion__grid">
        <MDBRow>
      <h6>Enter the following details:</h6>
          <MDBCol>
            <MDBInput
              id="voidfrac"
              label="Void Fraction"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="Diamter"
              label="Enter the Diameter(m)"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="density"
              label="Enter the density(kg/m^3)"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="velocity"
              label="Enter the Velocity(m/s)"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="viscosity"
              label="Enter the viscosity(Pa.s)"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="pnot"
              label="Enter the Po(Pa)"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="conv"
              label="Enter the conversion"
              type="text"
              required
            />
          </MDBCol>
          
        </MDBRow>
      </div>
      {/* ================= */}
      <div className="calcualtion__grid">
        <MDBRow>
        <MDBCol>
            <MDBInput
              id="Z"
              label="Enter the value of Z(in m)"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="alpha"
              label="Enter the value of alpha"
              type="text"
              required
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              id="Ea"
              label="Enter the value of activation energy(kJ/mol)"
              type="text"
              required
            />
          </MDBCol>
          
          
          
        </MDBRow>
        {/* ------------- */}
      </div>
      <div className="calcualtion__grid">
      <MDBRow>
      <MDBCol>
            <MDBInput
              id="temp"
              label="Enter the initial temperature(in K)"
              type="text"
              required
            />
          </MDBCol>
      <MDBCol>
            <MDBInput
              id="canot"
              label="Enter the initial concetration of A(mol/L)"
              type="text"
              required
            />
          </MDBCol>
      <MDBCol>
            <MDBInput
              id="denscat"
              label="Enter the density of the catalyst(kg/m^3)"
              type="text"
              required
            />
          </MDBCol>
        <MDBCol>
          <MDBInput
            id="volfo"
            label="Enter the volume flow rate(m^3/s)"
            type="text"
            required
          />
        </MDBCol>
        
      </MDBRow>
      </div>

      <MDBBtnGroup className="btn__click" onClick={handleClick}>
        Go
      </MDBBtnGroup>

      <div className="result__grid">
        <div>The value of ΔP : {result[0].toFixed(3)} Pa </div>
        <div>The value of β : {result[1].toFixed(3)} </div>
        <div> Weight in Gas Phase : {result[2].toFixed(3)} kg</div>
        <div> Weight in Liquid Phase: {result[3].toFixed(3)} kg</div>
      </div>
    </>
  );
};
export default PackedBed;
