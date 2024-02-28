import { useEffect, useState } from "react";

export const Title = () => {

    const[value,setValue] = useState(0)
    
    useEffect(() => {

        //conditional rendering...
        if(value < 3)
            document.title = `Value: ${value}`
        else
            document.title = `Can't ⬆ from 3`
    },[value]) //why [value] video 43
    
    
    return (
        <>
            <button onClick={() => setValue(value+1)}>Increase</button>
        </>
    )
}
