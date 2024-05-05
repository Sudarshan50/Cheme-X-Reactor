import React, { useState } from "react";
import { MDBInput, MDBRow, MDBCol, MDBBtnGroup } from "mdb-react-ui-kit";
import { Batch } from "../../Calculations/batch.js";
import "./calc.css";
import Head from "../Header/header.js";
import batchImg from "../../assets/batch_calc_page.jpg";

const BatchReactor = () => {
  const [result, setResult] = useState([0, 0, 0]);
  const handleClick = () => {
    let initca = document.getElementById("orre").value;
    let temp = document.getElementById("temp").value;
    let Ea = document.getElementById("actv").value;
    let conv = document.getElementById("conv").value;
    let time = document.getElementById("time").value;
    let kref = document.getElementById("kref").value;
    let aplha = document.getElementById("orre").value;
    let a = document.getElementById("aval").value;
    let b = document.getElementById("bval").value;

    setResult(Batch(kref, Ea, temp, initca, aplha, conv, time,a,b));
  };
  return (
    <>
      <Head
        title={"Batch Reactor"}
        subitle={"Reaction Enginnering"}
        photo={batchImg}
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
          </MDBRow>
      </div>
      <div className="calcualtion__grid">
        <MDBRow>
      <h6>Enter the following details:</h6>
          <MDBCol>
            <MDBInput id="orre" label="Order of the reaction" type="text" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="temp" label="Enter the temperature in (K)" type="text" />
          </MDBCol>
          <MDBCol>
            <MDBCol>
              <MDBInput id="actv" label="Activation Energy(kJ/mol)" type="text" />
            </MDBCol>
            </MDBCol>
            <MDBCol>
            <MDBInput
              id="kref"
              label="Enter the value of k (300K)"
              type="text"
            />
          </MDBCol>
          <MDBCol>
            <MDBInput id="conv" label="Conversion" type="text" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="time" label="Enter the time(s)" type="text" />
          </MDBCol>
        </MDBRow>
      </div>
      <MDBBtnGroup className="btn__click" onClick={handleClick}>
        Go
      </MDBBtnGroup>

      <div className="result__grid">
        <div>Volume of Batch-reactor: {result[0].toFixed(3)} mol</div>
        <div>Concentration of A: {result[1].toFixed(3)} mol/L</div>
        <div>Concentration of C: {result[2].toFixed(3)} mol/L</div>
      </div>
    </>
  );
};
export default BatchReactor;
