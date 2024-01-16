import React from "react";
import data from "../data/data";

const Navbar = ({setmenu}) =>{

    const Data = data

    return(
        <div className="navbar">
            <h1>Our Menu</h1>
            <div className="btn-div">
                <button onClick={(e)=>{
                    setmenu(Data)
                }}>All</button>

                <button onClick={(e)=>{
                    setmenu(Data.filter((value)=>{return(value.category == "breakfast")}))
                }}>BreakFast</button>


                <button onClick={(e)=>{
                    setmenu(Data.filter((value)=>{return(value.category == "lunch")}))
                }}>Lunch</button>



                <button onClick={(e)=>{
                    setmenu(Data.filter((value)=>{return(value.category == "shakes")}))
                }}>Shakes</button>
            </div>
        </div>
    )
}

export default Navbar