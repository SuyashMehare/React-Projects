import { useEffect, useState, useRef, useCallback} from "react"

export const PassGen = () =>{
    
    const[password,setPassword] = useState("");
    const[length, setlength] = useState(6)
    const[isNumReq, setNumber] = useState(false)
    const[isCharReq, setCharacters] = useState(false)
    const passRef = useRef(null);

    useEffect(() => {
        generatePassword()
    }, [isNumReq,isCharReq,length])



    const copyPassToClipboard = useCallback(() => {

        console.log("Copied");
        // passRef.current?.select()
        // passRef.current?.setSelectionRange(0,5)
        window.navigator.clipboard.writeText(password)

    },[password])



    const debug = () =>{
        console.log('debug')
    }

    const copyPass = () => {

        // window.clip
    }

    const generatePassword = () =>{

        let pass = ""
        let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let nums = "0123456789"
        let chars = "/-!@#$%^&*()_{}[]+=~`"
        

        if(isNumReq){ alpha += nums}
        if(isCharReq){ alpha += chars}

        for(let i=0 ; i < length ; i++){

            let index = Math.floor(Math.random()*alpha.length)
            pass = pass + alpha.charAt(index)
        }
        
        setPassword(pass)
    }

    return (
        <>
            <div>
                <h1>Password Generator</h1>
            </div>

            <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 ba-gray-700">
                <div>
                    <input type="text" value={password} ref={passRef} readOnly></input>
                    <button onClick={copyPassToClipboard}>Copy</button>
                </div>

                <input type="range" min={4} max={20} value = {length} className= 'cursor-pointer' onChange={(e) => setlength(e.target.value)}></input> <label>Length {length}</label>
                <input type="checkbox" defaultChecked = {isNumReq} onClick={() =>setNumber(!isNumReq)}/> <label>Number</label>
                <input type="checkbox" defaultChecked = {isCharReq} onClick={() =>setCharacters((prev) => !prev)}/> <label>Charactersa</label>
            </div>
        </>
    )
}


/**
 * Generate pass | constraint[numberic, character, alphabets] ✔
 * Generate pass | constraint[length] ✔ | range bar stuck
 * Copying password
 * Optimise Code
 * 
 */