
import React ,{useState} from "react"
import Navbar from "./Navbar"
import DisplayMenu from "./DisplayMenu"



const App = () =>{
   
    const [menu , setmenu] = useState("")

    return(
        <div>
            <Navbar setmenu = {setmenu}/>

            {
                menu!="" &&   <DisplayMenu menu={menu}/>
            }
          
        </div>
    )
}

export default App


