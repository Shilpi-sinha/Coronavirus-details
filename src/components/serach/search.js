import { useState } from 'react'
import DataTable from '../dataTable/dataTable'
import "./style.css"
const Search=(props)=>{
    const {data}= props
    const [val,setVal]= useState(0)
    
    const carr=data.Countries
    const handleClick=(e)=>{
        setVal(e.target.value)  
    }
  
    return(
        <div id="main">     
        <select id="dropdown" className="dropdown"  onChange={handleClick}>
        {carr?.map(item=>{
        return (
            <option>{item.Country}</option>
        )
    })}
        </select> 
        <DataTable val={val} data={carr}/>    
        </div>
    )
}
export default Search