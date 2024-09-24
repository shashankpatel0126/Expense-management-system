import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const UserReport=()=>{
    const [uid, setUid]= useState("");
    const [startDate, setStartDate]= useState("");
    const [endDate, setEndDate]= useState("");
    const [mydata1, setMydata1]= useState([]);
    const [mydata2, setMydata2]=useState([]);

    useEffect(()=>{
        let myid= window.localStorage.getItem("userid");
        setUid(myid);
    }, [])

    const handleSubmit=()=>{
        let api="http://localhost:8000/transactions/displayreport";
        axios.post(api, {startdate:startDate, enddate:endDate, id:uid}).then((res)=>{
            console.log(res.data);
            setMydata1(res.data.mydata1);
            setMydata2(res.data.mydata2);
        })

    }

  let sno=0;
  let totalEarning=0;
  const ernData=mydata1.map((key)=>{
     sno++;
     totalEarning+=key.amount;
    return(
        <>
          <tr>
            <td> {sno}</td>
            <td> {key.source} </td>
            <td> {key.date} </td>
            <td> {key.amount} </td>
          </tr>
        </>
    )
  })

  let sno1=0;
  let totalExpenses=0
  const expData=mydata2.map((key)=>{
       sno1++;
       totalExpenses+=key.amount;
    return(
        <>
          <tr>
            <td> {sno1} </td>
            <td> {key.description} </td>
            <td> {key.date} </td>
            <td> {key.amount} </td>
          </tr>
        </>
    )
  })

    return(
        <>
         <h1> Display user Report</h1>
          Enter Start Date : <input type="date" value={startDate} 
         onChange={(e)=>{setStartDate(e.target.value)}} /> 
         Enter End Date : <input type="date" value={endDate} 
         onChange={(e)=>{setEndDate(e.target.value)}} />
         <button onClick={handleSubmit}>Search</button>
         <hr size="3" />

         <h3 style={{color:"green"}}> Total balance: {totalEarning-totalExpenses<0?<span style={{color:"red"}}>{totalEarning-totalExpenses} </span>:totalEarning-totalExpenses}</h3>
         <div id="reportdata">
            <div>
            <h2> Earning Data</h2>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Source</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
          {ernData}
          <tr>
            <th colspan="3"> Total Earning Amount: </th>
            <th>{totalEarning}</th>
          </tr>
        </tbody>
        </Table>

            </div>
            <div>
            <h2> Expenses Data</h2>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
          {expData}
          <tr>
            <th colspan="3"> Total Expenses Amount: </th>
            <th>{totalExpenses}</th>
          </tr>
        </tbody>
        </Table>
            </div>
         </div>
        </>
    )
}

export default UserReport;