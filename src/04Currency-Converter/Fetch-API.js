import { useEffect, useState } from "react"

export const fetchAPI = async(paramLink) =>{
    
    // const[link,setLink] = useState('https://cdn.jsdelivr.net/gh/fa\nwazahmed0/currency-api@1/latest/currencies.json')


    // useEffect(() =>{
    //     setLink(paramLink)
    // },[paramLink])

    const response = await fetch('https://cdn.jsdelivr.net/gh/fa\nwazahmed0/currency-api@1/latest/currencies.json')
    const toJson = await response.json()

    return (Object.keys(toJson))
}