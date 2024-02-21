import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const Welcome = ()=>{
    const[showWelcome , setShowWelcome]= useState()
    useEffect(()=>{
        const data = localStorage.getItem("show_app_intro")
        setShowWelcome(JSON.parse(data) ?? true)
    },[])
    const onHide =()=>{
        setShowWelcome(false);
        localStorage.setItem("show_app_intro", JSON.stringify(false))
    }
    return(
        <>
        { showWelcome && ( 
             <div className="contanier">
              <div className="bg-primary text-white my-3">
              <FontAwesomeIcon icon={faClose} style={{float:"right", margin:"5px"}} onClick={onHide}/>
              <div className="p-4">Welcome</div>
             </div>
            </div>
            )}
        </>
      
    )
}

export default Welcome