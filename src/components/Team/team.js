import React from "react";
import RowCard from "../../utils/about.js";
import Head from "../Header/header.js";
import "./team.css";
import team from "../../assets/team.jpeg";
import sudu from "../../assets/profiles/profile3.jpeg"
import yugal from "../../assets/profiles/yugal.jpeg"
import dhruv from "../../assets/profiles/dhruv.jpeg"
import saket from "../../assets/profiles/saket.jpeg"
const Team = () => {
    return(
        <>
        <Head title = {"Team"} subtitle = {"Our Team"} photo = {team}/>
        <div className="team__card">
        <RowCard title = {"Dhruv Upadhyay"} subtitle = {"Chemical Engineering"} tag = {"Leader"} photo = {dhruv}/>
        <RowCard title = {"Sudarshan Kumar Oraon"} subtitle = {"Chemical Engineering"} tag = {"Member"} photo = {sudu}/>
        <RowCard title = {"Yugal Kishore Misra"} subtitle = {"Chemical Engineering"} tag = {"Member"} photo = {yugal}/>
        <RowCard title = {"Saket Kumar Singh"} subtitle = {"Chemical Engineering"} tag = {"Member"} photo = {saket}/>
        </div>
        </>
    )
}
export default Team;