import { useEffect, useState } from "react"
//`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
export const FromBox = () => {


    const[from,setFrom] = useState('usd');
    const[currencies, setCurrencies] = useState();
    const[currencyOpt, setCurrencyOpt] = useState([])
 
    useEffect(() => {
        
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`)
                         .then((res) => console.log(res))
                        //  .then((res) => {setCurrencyOpt(Object.keys(res[from]))})
        
        // console.log(from);
    },[from])
    

    return(

        <>
            
            <div>
                {/* <select onChange={(e) => setFrom(e.target.value)}> 
                    {
                       currencyOpt.map((currency) => <option value={currency}>{currency}</option>)
                    }
                </select> */}

            </div>
        </>
    )
}