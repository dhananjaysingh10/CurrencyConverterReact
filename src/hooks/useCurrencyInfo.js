 import { useEffect, useState } from "react";
function useCurrencyInfo(currency){
    // const date = new Date();
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // let currentDate = `${year}-${month}-${date}`;
    // console.log(currentDate)
    let currentDate = new Date().toJSON().slice(0, 10);
    console.log(currentDate);
    const [data, setData] = useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${currentDate}/v1/currencies/${currency}.json`
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;