import { useState } from "react"

export const BgChanger = () =>{

    const[colour, setColour] = useState("olive");

    const arrColor = ["blue","pink","black","red"]

    return (
        <>
            <div className="w-screen h-dvh" 
                 style={{backgroundColor:colour}}
                 >
                BackGround            
            </div>

            
            {
                arrColor.map((e,i) => {
                    return (
                    <button key = {i}
                            style={{backgroundColor:e}} 
                            onClick={()=>setColour(e)}
                            
                            >{e}</button>
                    )
                })
            }
            
        </>
        
    )
} 