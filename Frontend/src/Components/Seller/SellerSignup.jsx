import work from "../../img/work/—Pngtree—a man at work_4463549.png";
import stair from "../../img/work/pngwing.com.png";
import man from "../../img/work/man.png.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useState } from "react";
import { NETWORK } from "../../../network";

export default function SellerSignup() {
  const [ShopName, setSopName] = useState("");
  const [phone, setphone] = useState(0);
  const [password, setpassword] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [description, setdescription] = useState("");
  const navigate = useNavigate();

  async function handle() {
    await axios
      .post(`${NETWORK}/food/seller/create`, {
        shopName: ShopName,
        password,
        phoneNumber: Number(phone),
        imgUrl,
        description,
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/otp");
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error);
      });
  }

  return (
    <>
      <div className="min-h-screen p-1 ">
        <div className="bg-[#fff7ed]  min-h-screen   rounded-xl flex flex-row justify-center md:justify-between  lg:justify-center">
          <div className="flex flex-col">
            <img
              src={work}
              className=" hidden md:flex h-96 w-96 mt-auto lg:absolute lg:inset-y-0 lg:left-0"
            />
          </div>
          <div className="flex flex-col p-10 gap-5 w-96 pt-32 xl:ml-16">
            <input
              placeholder="ShopName"
              className="p-2 border-2 rounded-lg "
              onChange={(e) => {
                setSopName(e.target.value);
              }}
            ></input>
            <input
              placeholder="Phone Number"
              className="p-2 border-2 rounded-lg "
              onChange={(e) => {
                setphone(e.target.value);
              }}
            ></input>
            <input
              placeholder="Password"
              className="p-2 border-2 rounded-lg"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>
            <input
              placeholder="Description"
              className="p-2 border-2 rounded-lg"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            ></input>
            <input
              placeholder="imgUrl"
              className="p-2 border-2 rounded-lg"
              onChange={(e) => {
                setimgUrl(e.target.value);
              }}
            ></input>
            <div className="flex flex-row justify-between sm:justify-evenly lg:justify-between w-full">
            <div className="flex gap-2">
  <div className="">
    <input
      id="remember-me-checkbox"
      type="checkbox"
      value=""
      className=" w-4 h-4 border-gray-300 rounded"
    ></input>
  </div>
  <div className="">Remember me</div>
</div>
              <div className="flex cursor-pointer text-xs pt-1">
              Term and Conditions
              </div>
            </div>

            <div className=" flex justify-center ">
              <button
                className="bg-blue-500 p-2 w-36  rounded-md text-white "
                onClick={handle}
              >
                Create Account
              </button>
            </div>
            <div className="flex gap-2 mx-16 pl-3">
              <span className="font-semibold text-xs">Already registered?</span>
              <button
                className="text-red-600 font-semibold -my-2 text-sm"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </button>
            </div>
            <img src={stair} className="flex md:hidden h-80" />
          </div>
          <img
            src={man}
            className="hidden lg:flex h-1/2 lg:absolute lg:bottom-0 right-0"
          />
        </div>
      </div>
    </>
  );
}
