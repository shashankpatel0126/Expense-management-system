import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Expense=()=>{
  const [input, setInput] = useState("");
  const [uid, setUid]= useState("");
  const handleInput=(e)=>{
   let name= e.target.name;
   let value=e.target.value;
   setInput(values=>({...values, [name]:value}));
  }

  useEffect(()=>{

    let userid=window.localStorage.getItem("userid");
    setUid(userid)
  }, [])
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/transactions/expensesave";
    axios.post(api, {...input, id:uid}).then((res)=>{
      console.log(res);
    })
  }
 const btn=(e)=>{
  handleSubmit(e);
  alert("data save")
 }

  return(
        <>
          <h1> Expenses Form</h1>
          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Amount :</Form.Label>
         <Form.Control type="text"  name="amount"  value={input.amount} onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Description :</Form.Label>
         <Form.Control type="text"  name="description" value={input.description} onChange={handleInput}/>
      </Form.Group>
     
      
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Select Date</Form.Label>
    <Form.Control type="date"  name="date"  value={input.date} onChange={handleInput}/>
    </Form.Group>

      <Button variant="primary" type="submit" onClick={btn} >
       Submit
      </Button>
    </Form>


        </>
    )
}

export default Expense;