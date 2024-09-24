import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Earning=()=>{
  const [uid, setUid]= useState();
  const [input, setInput]=useState({});

  
  useEffect(()=>{
    let usrid= window.localStorage.getItem("userid");
    setUid(usrid);
  }, []);

  const handleInput=(e)=>{
    let name=e.target.name;
    let value= e.target.value;

    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    let api="http://localhost:8000/transactions/amountsave";
    axios.post(api, {...input, id:uid}).then((res)=>{
      console.log(res);
    })
  }
 const btn=(e)=>{
  handleSubmit(e)
  alert("data save...")
 }

    return(
        <>
          <h1> Enter your Earning</h1>

          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Amount</Form.Label>
         <Form.Control type="text"  name="amount" value={input.amount} onChange={handleInput} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Select Income Source</Form.Label>
      <Form.Select aria-label="Default select example" name="source" value={input.source} onChange={handleInput} >
      <option>Open this select menu</option>
      <option>By Salary</option>
      <option>By Rent</option>
      <option>By Intrest</option>
      <option>Other Source</option>
    </Form.Select>
    </Form.Group>
      
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Select Date</Form.Label>
    <Form.Control type="date"  name="date" value={input.date} onChange={handleInput} />
    </Form.Group>

      <Button variant="primary" type="submit" onClick={btn}>
       Submit
      </Button>
    </Form>

        </>
    )
}

export default Earning;