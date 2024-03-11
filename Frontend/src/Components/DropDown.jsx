import { useNavigate } from "react-router-dom"

export default function DropDown(){
    const navigate =useNavigate();

    return(
        <>
        <div className=" flex flex-col  bg-[#fff7ed] w-44  gap-2 p-4 rounded-lg border-[1px]">
            <button className="text-white bg-red-600 hover:bg-red-700 active:bg-red-600 rounded-md font-semibold p-2" onClick={
                ()=>{navigate('/signup')}
            }>    
                Join as user
            </button>
            <button className=" text-white bg-red-600 hover:bg-red-700 active:bg-red-600 rounded-md font-semibold p-2 "onClick={
                ()=>{navigate('/create')}
            }>
            Join as Seller
            </button>
        </div>
        </>
    )
}