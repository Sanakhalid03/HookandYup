import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import { FaWpforms } from "react-icons/fa";
import toast from 'react-hot-toast';

function Form() {
   
    const schema = yup.object().shape({
        Name:yup.string().required("Your Name is Required"),
        Email:yup.string().email("Invalid Email Format").required("Your Email is Required"),
        MobileNumber:yup.string().required("Your Number is Required").test("PositiveNumber","Only Positive Numbers are Allowed",(value)=>!value||!value.includes("-")).matches(/^[0-9]+$/, "Only Numbers are Allowed").length(11),
        Password:yup.string().required("Your Password is Required").min(4).max(8),
        ConfirmPassword:yup.string().required("Confirm Your Password").oneOf([yup.ref("Password")],"Confirm Password should be same"),
    })
     const { register, handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
     });
   const onSubmit =(data:{})=> {
    console.log(data)
    toast.success("Form is Submitted Successfully!")
 }
   
  return (
    <>
    <div className="flex  justify-center  py-8">
    <form onSubmit={handleSubmit(onSubmit)}className="flex flex-col gap-3  border-amber-700 border-2 rounded-lg w-[95%] max-w-130 bg-white p-4 py-6 mt-8 ">
        <div className="flex justify-center items-center p-3 gap-1">
        <h1 className="text-amber-800 text-3xl font-bold ">Sign Up</h1>
        <FaWpforms className="text-2xl text-amber-800"/>
        </div>
        <div className="flex flex-col items-start p-2 gap-1 w-[90%] mx-auto rounded-md border-2 border-amber-700 ">
       <label className="text-lg font-medium text-amber-800">Name</label>
       <input type="text" placeholder="Name..." className="text-md font-medium outline-0 w-full " {...register("Name")}/>
       <span className='text-red-600 font-medium'>{errors.Name?.message}</span>
       </div>
       <div className="flex flex-col items-start p-2 gap-1 w-[90%] mx-auto rounded-md border-2 border-amber-700">
       <label className="text-lg font-medium text-amber-800">Email</label>
       <input type="email" placeholder="Email..." className="text-md font-medium outline-0 w-full" {...register("Email")}/>
       <span className='text-red-600 font-medium'>{errors.Email?.message}</span>
       </div>
       <div className="flex flex-col items-start p-2 gap-1 w-[90%] mx-auto rounded-md border-2 border-amber-700">
       <label className="text-lg font-medium text-amber-800">Mobile Number</label>
       <input type="tel" placeholder="Number..." className="text-md font-medium outline-0 w-full" {...register("MobileNumber")}/>
       <span className='text-red-600 font-medium'>{errors.MobileNumber?.message}</span>
       </div>
       <div className="flex flex-col items-start p-2 gap-1 w-[90%] mx-auto rounded-md border-2 border-amber-700">
       <label className="text-lg font-medium text-amber-800">Password</label>
       <input type="password" placeholder="Password..." className="text-md font-medium outline-0 w-full" {...register("Password")}/>
       <span className='text-red-600 font-medium'>{errors.Password?.message}</span>
       </div>
       <div className="flex flex-col items-start p-2 gap-1 w-[90%] mx-auto rounded-md border-2 border-amber-700">
       <label className="text-lg font-medium text-amber-800">Password</label>
       <input type="password" placeholder="Confirm Password..." className="text-md font-medium outline-0 w-full" {...register("ConfirmPassword")}/>
       <span className='text-red-600 font-medium'>{errors.ConfirmPassword?.message}</span>
       </div>
       <button type="submit" className="text-md font-medium outline-0 w-[90%] mx-auto bg-amber-950 text-white p-3 rounded-lg cursor-pointer transition hover:bg-amber-900">Submit</button>
    </form>
    </div>
    </>
  )
}

export default Form