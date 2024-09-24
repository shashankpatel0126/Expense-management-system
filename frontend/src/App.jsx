import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import UserDashBoard from "./components/UserDashboard"
import DisplayExpenses from "./components/DisplayExpenses";
import DisplayEarning from "./components/DisplayEarning";
import Earning from "./components/Earning";
import Expense from "./components/Expense";
import UserReport from "./components/UserReport";



const App=()=> {

  return (
    <>
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>

    <Routes>
      <Route path="/dashboard" element={<UserDashBoard/>}>
      <Route path="displayexpense" element={<DisplayExpenses/>}/>
      <Route path="displayearning" element={<DisplayEarning/>}/>
      <Route path="earning" element={<Earning/>}/>
      <Route path="expense" element={<Expense/>}/>
      <Route path="userreport" element={<UserReport/>}/>
      </Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
