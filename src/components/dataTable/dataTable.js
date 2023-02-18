import "./style.css"
const DataTable=(props)=>{
    const {val, data}= props
    if(val===0){
        return;
    }
        let ind= data.findIndex(item=>{
        return (item.Country===val)
    })
    return(
        <div className="maintable">
            <p>{data.Date}</p>
            <table>
                <h3>Country: {data[ind].Country}</h3>
                <h4>Date: {data[ind].Date.slice(0,10)}</h4>
                <tbody>
                    <tr>
                        <td>NewConfirmed</td>
                        <td>{data[ind].NewConfirmed}</td>
                        </tr>
                        <tr>
                        <td>Total Confirmed</td>
                        <td>{data[ind].TotalConfirmed}</td>
                        </tr>
                        <tr>
                        <td>TotalDeaths</td>
                        <td>{data[ind].TotalDeaths}</td>
                        </tr>
                        <tr>
                        <td>NewRecovered</td>
                        <td>{data[ind].NewRecovered}</td>
                        </tr>
                        <tr>
                        <td>TotalRecovered</td>
                        <td>{data[ind].TotalRecovered}</td>  
                        </tr>                     
                   
                </tbody>
            </table>
        </div>
    )
}
export default DataTable;
