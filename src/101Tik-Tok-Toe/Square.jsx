import { useState } from "react"
import "./style.css"

export const Square = ({nextValue, handleClickInBoard}) =>{

    const[value, setValue] = useState(null)

    function handleClick() {

        console.log('handle inside square');
        setValue("X")
    }


    return(

        <>  
            <button className="square" onClick={handleClickInBoard}>
                {nextValue}
            </button>
        </>
    )
}