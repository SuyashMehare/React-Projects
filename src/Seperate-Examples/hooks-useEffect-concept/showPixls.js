import { useEffect, useState } from "react"

export const Pixels = () => {

    const[width,setWidth] = useState(window.innerWidth);
    const[height,setHeight] = useState(window.innerHeight);

    
    /** as changing screen-size explicitly, 
     * the `window.innerwidth` not returning anything.
     * So. this code not working except 1st run. 
     * 👀use listner provided by window obj. and set TYPE to "resize" 
     
      useEffect(() => {
        console.log(window.innerWidth);
        setWidth(window.innerWidth)
        document.title = `${window.innerWidth}`
    })

    */

    // valid code!
    useEffect(() => {
        window.addEventListener('resize',() => setWidth(window.innerWidth))
        window.addEventListener('resize',() => setHeight(window.innerHeight))

        /**Alternative:-
         
          window.addEventListener('resize',() => {
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        })
         */
    })
    
    return (

        <>
            <h2>{width}px X {height}px </h2>
            Pixels
        </>
    )
}