import foodimg from '../../img/victoria-shes-UC0HZdUitWY-unsplash.jpg';
import burger from '../../img/food/p9.png'
import pizza from '../../img/food/p12.png'
import { useNavigate } from 'react-router-dom';
import  { useState } from "react"
import axios from "axios";
import { NETWORK } from '../../../network';
import emailjs from "@emailjs/browser";
import { errorToast, successToast } from '../../toast';


export default function Signup(){
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[phone,setphone]=useState(0);
    const navigate=useNavigate();
    const serive = import.meta.env.VITE_SERVICE_ID;
    const temp = import.meta.env.VITE_TEMPLATE_ID;
    const key = import.meta.env.VITE_PUBLIC_KEY;

async function handle(){
    await axios.post(`${NETWORK}/food/user/signup`,
        {
            firstName:firstname,
            lastName:lastname,
            email:email,
            password:password,
            mobileNumber:(Number)(phone)
        })
    .then(res=>{
       console.log(res.data)
       SendEmail(res.data.email,res.data.name,res.data.otp)
       successToast(`otp sent on ${res.data.email}` )
        // alert(`otp send on ${res.data.email}` );
        navigate('/uotp')
    })
    .catch(error=>{
        errorToast(error.response.data.message)
        // alert(error.response.data.message)
        console.log(error);
    })
}

function SendEmail(email, name,otp) {
    // emailjs
    //   .send(
    //     serive,
    //     temp,
    //     {
    //       to_name: name,
    //       message: `Your otp is ${otp}`,
    //       from_name: "Sanjeev",
    //       receiver: "sanjeev.19kr@gmail.com",
    //       reply_to: "sanjeev.19kr@gmail.com",
    //     },
    //     key
    //   )
    //   .then(
    //     () => {
    //       console.log("success");
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  }




    
    return(
        <>
        <div className="min-h-screen p-1 ">
        <div className="bg-[#fff7ed] p-10 min-h-screen rounded-xl flex flex-col lg:flex-row    justify-between gap-3  ">
           <img src={pizza} className='hidden xl:block xl:h-80 xl:w-80'></img>
           <img src={burger} className='hidden xl:block xl:h-80 xl:w-80'></img>
           <img src={foodimg} className="  hidden lg:flex md:flex w-full h-60 object-cover items-center lg:h-96 lg:w-full rounded-lg xl:hidden  md:h-32"></img>
           
         
        <div className='flex flex-col '>
            <div className='flex flex-col gap-5 items-center pt-5 h-fit'>
                <hr className="w-full h-px my-8 bg-gray-200 border-0 flex lg:hidden"/>
                <input className='p-2 w-96 rounded-lg border-2' placeholder='First Name' onChange={
                    (e)=>{setfirstname(e.target.value)}
                }></input>
                <input className='p-2 w-96 rounded-lg border-2' placeholder='Last Name' onChange={
                    (e)=>{setlastname(e.target.value)}
                }></input>
                <input className='p-2 w-96 rounded-lg border-2' placeholder='Email address' onChange={
                    (e)=>{setemail(e.target.value)}
                }></input>
                <input className='p-2 w-96 rounded-lg border-2' placeholder='Password' onChange={
                    (e)=>{setpassword(e.target.value)}
                }></input>
                <input className='p-2 w-96 rounded-lg border-2' placeholder='Phone Number' onChange={
                    (e)=>{setphone(e.target.value)}
                }></input>
                    <div className='flex flex-row justify-between w-full' >
                        <div className='flex gap-2'>
                            <input disabled id="disabled-checkbox" type="checkbox" value="" className="w-4 h-4 border-gray-300 rounded pt-6"></input>
                            <div className=''>Remember me</div>
                            
                        </div>    
                        <div className='flex cursor-pointer text-xs pt-1'>Term and Conditons</div>
                    </div>
                <button className='bg-blue-500 p-2 w-32 rounded-md text-white' onClick={handle}>Sign Up</button>
                <div>
                    <span className='font-bold text-sm'>Already have an account?</span>
                    <button className='text-red-600 font-semibold cursor-pointer' onClick={
                        ()=>{navigate('/signin')}
                    }> Login in</button>
                </div>
                {/* <img src={burger} className='xl:hidden h-16 w-16 '></img> */}
            </div>
            <div className='text-black'>
               
            </div>
        </div> 
        </div>
        </div>
       
        </>
    )
}