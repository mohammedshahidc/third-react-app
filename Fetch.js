import React,{useEffect,useState} from "react"
function Fetch(){
const [state,setState]=useState([])
useEffect(()=>{
    fetch("https://dummyjson.com/quotes")
    .then(response=>((response.json())))
    .then(data=>((setState(data.quotes.splice(0,10)))))
},[])
return (
    <div >
        <h1 style={{backgroundColor:"black",color:"white"}}>fetch data</h1>
        {state.map((quotes)=>( <h1 key={quotes.id} style={{backgroundColor:"blue",color:"white"}}     >{quotes.quote}</h1>))}
       
    </div>
)
}
export default Fetch;