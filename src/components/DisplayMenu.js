import React from "react";


const DisplayMenu = ({menu}) =>{

    return(
        <div>
            {
                menu.map((value)=>{
                
                    return(   
                    <div className="menu-data">

                        <h1>{value.c}</h1>

  
                         <span>{value.title}</span>
                       
                         <span>${value.price}</span>
                         <p>{value.desc}</p>
                         
                    </div>
              )
                       
                })
            }
        </div>
        
    )
}

export default DisplayMenu