import "./style.css"
import  { useEffect,useState} from 'react'
// import axios from 'axios'
import Search from "../serach/search"

const Table=()=>{
    const [data,setData]= useState([])

    // useEffect(()=>{
    //     fetchData()
    // },[])

    // const fetchData =async()=>{
    //     const response = await fetch(
    //         "https://api.covid19api.com/summary"
    //       );
    //       const datalist = await response.json();
    //       setData(datalist)
    // }

    useEffect(() => {
        fetch('https://api.covid19api.com/summary')
           .then((response) => response.json())
           .then((datalist) => {
              setData(datalist);
           })
           .catch((err) => {
              alert("Currently api is out of service")
           });
     }, []);


    
    // axios.get('https://api.covid19api.com/summary')
    // .then(res=>{
    //     const datalist= res.data;
    //     setData(datalist)
    // })

    return(
    <div className="table">
    <h1 className="heading">CORONAVIRUS DETAILS</h1>    
    <h2>Select Country</h2> 
    <Search data={data}/>
    </div>)
}
export default Table