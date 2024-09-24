import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const UserDashBoard=()=>{
const [username, setUsername]=useState("");
const [email, setEmail]=useState("");
const navigate= useNavigate();

useEffect(()=>{
     const usernm= window.localStorage.getItem("userName");
     const usremail= window.localStorage.getItem("userEmail");
     if (!usernm)
     {
        navigate("/");
     }
     setUsername(usernm);
     setEmail(usremail)
}, []);

const logout=()=>{
    window.localStorage.clear();
    navigate("/");
}
   return(
    <>
     <Container fluid>
        <Row>
           <Col className="text-end bg-info p-3 text-black"> 
            Welcome : {username} Email: {email}
          <Button variant="primary" size="sm" style={{marginLeft:"20px"}} onClick={logout}>Logout</Button>  
           </Col>
        </Row>
      <Row>
        <Col md={2} className='bg-light'> 
      
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as={Link} to="earning">Enter Earnings</Nav.Link>
      <Nav.Link as={Link} to="expense">Enter Expenses</Nav.Link>
      <Nav.Link as={Link} to="displayearning">Display Earnings</Nav.Link>
      <Nav.Link as={Link} to="displayexpense">Display Expenses</Nav.Link>
      <Nav.Link as={Link} to="userreport">Reports</Nav.Link>
      <Nav.Link as={Link} to="basicpie">Graphical Reports</Nav.Link>
      <Nav.Link as={Link} to="earning">Search Data</Nav.Link>
      
       </Nav>
        

        </Col>
        <Col md={10}>
         <Outlet/>
        </Col>
      </Row>
      </Container>
    </>
   )
}

export default UserDashBoard;
