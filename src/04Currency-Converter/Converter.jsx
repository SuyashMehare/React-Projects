import { useEffect, useState } from "react"
import { FromBox } from "./FromBox"
import { ToBox } from "./ToBox"
import { fetchAPI } from "./Fetch-API"

export const Converter = () => {

    const[currencies, setCurrencies] = useState([])
    const[currenciesOpt, setCurrenciesOpt] = useState([])
    const[from, setFrom] = useState('usd')
    const[to, setTo] = useState('inr')
    const[rate,setRate] = useState()



    


    useEffect(()=>{

        fetchAPI().then((data) => setCurrencies(data))
  
    },[])

    // from is selected by client -> all mappings of `from` is stored 
    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/gh/fa\nwazahmed0/currency-api@1/latest/currencies/${from}.json`)
        .then((data) => data.json())        // convert req data to json format
        .then((data) => data[`${from}`])    // return mapping(currency->rate w.r.t from)
        .then((keyValuePairs) => Object.keys(keyValuePairs))  // convert json Obj to array {json['inr'] }
        .then((options) => setCurrenciesOpt(options))   // adding conversions of `from`
        
    },[from])



    const exchangeRate = (amount) => {
        
        fetch(`https://cdn.jsdelivr.net/gh/fa\nwazahmed0/currency-api@1/latest/currencies/${from}.json`)
        .then((data) => data.json())        // convert req data to json format
        .then((data) => data[`${from}`])    // return mapping(currency->rate w.r.t from)
        .then((keyValuePairs) => setRate(amount * keyValuePairs[`${to}`])) 

    }

    return(

        <> 
            <div>
                <label>From </label>
                <input placeholder="Amount" onChange={(e) => exchangeRate(e.target.value)}/>    

                <select name="selectFrom" onClick={(e)=>setFrom(e.target.value)}>
                    {
                        currencies.map((currency) =>{

                            return <option value={currency}>{currency}</option>
                        })
                    }
                </select>    
            </div>


            <div>
                <label>To</label>
                <input placeholder="Amount"  disabled="true" value={rate}/>

                <select name="selectTo" onClick={(e)=>setTo(e.target.value)}>
                    {
                        currenciesOpt.map((currency) =>{

                            return <option value={currency}>{currency}</option>
                        })
                    }
                </select>    
            </div>


            <div>
                <button onClick={() => swap()}>swap</button>
            </div>
        </>
    )
}