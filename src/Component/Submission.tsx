
import { useLocation, useNavigate } from "react-router-dom"

function Submission() {
     const {state}=useLocation()
     const navigate =useNavigate()
     const back=()=>{
          navigate("/")
     }
   
    
  return (
    <>
    <div className="flex justify-center items-center h-screen ">
    <div className=" flex flex-col gap-3  border-amber-700 border-2 rounded-lg w-[95%] max-w-130 bg-white p-8 mt-8 ">
     <h1 className="text-amber-800 text-3xl font-bold text-center p-2">User Data</h1>
    <div className="flex flex-col items-center md:flex-row lg:flex-row gap-3 p-2">
        <h2 className="text-xl lg:text-2xl font-medium text-amber-800">Name:</h2>
       <p className="text-xl lg:text-2xl font-medium">{state.Name}</p> 
   </div>
    <div className="flex flex-col items-center md:flex-row lg:flex-row gap-3 p-2">
        <h2  className="text-xl lg:text-2xl font-medium text-amber-800">Email:</h2>
       <p className="text-xl lg:text-2xl font-medium">{state.Email}</p> 
   </div>
    <div className="flex flex-col items-center md:flex-row lg:flex-row gap-3 p-2">
        <h2  className="text-xl lg:text-2xl font-medium text-amber-800">Mobile Number:</h2>
       <p className="text-xl lg:text-2xl font-medium">{state.MobileNumber}</p> 
   </div>
    <div className="flex flex-col items-center md:flex-row lg:flex-row gap-3 p-2">
        <h2  className="text-xl lg:text-2xl font-medium text-amber-800">Password:</h2>
       <p className="text-xl lg:text-2xl font-medium">{state.Password}</p> 
   </div>
    <button onClick={back} className="text-md font-medium outline-0 w-[90%] mx-auto bg-amber-950 text-white p-3 rounded-lg  cursor-pointer transition hover:bg-amber-900 mt-2">Back To Form</button>
    </div>
    </div>
    </>
  )
}

export default Submission