import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginimg from "../assets/loginImg.png";
import { PinInput } from "react-input-pin-code";
import axios from "axios";
// import bcrypt from "bcrypt";

function Register() {
  const [values, setValues] = React.useState(["", "", "", ""]);
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phoneNum = e.target.number.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const roleRequest = selectedOption;
    const combinedValue = values.join("");
    // console.log(combinedValue);
    const userInfo = {
      name,
      phoneNum,
      email,
      password,
      pin: combinedValue,
      roleRequest,
    };
    console.log(userInfo);
    await axios
      .post("http://localhost:3000/users", userInfo)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
  };

  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="grid grid-cols-2 items-center h-screen ">
        <div className="bg-gradient-to-r from-[#099718] to-[#03550b] h-full  rounded-r-[40px]  flex flex-col items-center justify-center">
          <div className=" max-w-2xl mx-auto">
            <img src={loginimg} alt="" />
          </div>
          <h2 className="text-3xl mt-6 text-white font-semibold text-center pb-2">
            Welcome to PocketFunds
          </h2>
          <p className="text-center text-gray-200 max-w-xl mx-auto">
            Proactively utilize standardized users with focused growth
            strategies. Phosfluorescently synergize installed base
          </p>
        </div>
        <div className=" relative">
          <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <div className=" bg-gray-50 rounded-3xl shadow-lg">
                {/* <p className='text-sm pt-2 pl-4'>If you have not registered then click on sign up button</p> */}
                <form
                  onSubmit={handleRegister}
                  action="#"
                  className="mb-0  space-y-4 rounded-3xl p-4 bg-white  sm:p-6 lg:p-8"
                >
                  <p className="text-center text-lg font-medium">
                    Register to your account
                  </p>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Name
                    </label>

                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none bg-gray-50 outline  focus:outline-[#099718]"
                        placeholder="Enter Full Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Phone Number
                    </label>

                    <div className="relative">
                      <input
                        type="number"
                        name="number"
                        className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none bg-gray-50 outline  focus:outline-[#099718]"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none bg-gray-50 outline  focus:outline-[#099718]"
                        placeholder="Enter email"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none bg-gray-50 outline  focus:outline-[#2A4589]"
                        placeholder="Enter password"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className=" flex items-center gap-4">
                    <div>
                      <input
                        type="radio"
                        id="user"
                        name="options"
                        value="user"
                        checked={selectedOption === "user"}
                        onChange={handleOptionChange}
                        className="form-radio h-5 w-5 text-[#099718]"
                      />
                      <label htmlFor="option1" className="ml-2 text-gray-700">
                        User
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="agent"
                        name="options"
                        value="agent"
                        checked={selectedOption === "agent"}
                        onChange={handleOptionChange}
                        className="form-radio h-5 w-5 text-[#099718]"
                      />
                      <label htmlFor="option2" className="ml-2 text-gray-700">
                        Agent
                      </label>
                    </div>
                  </div>

                  <div className="">
                    <h2 className="text-sm pb-2">Enter PIN</h2>
                    <PinInput
                      values={values}
                      onChange={(value, index, values) => setValues(values)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="block w-full rounded-lg bg-[#099718] text-white px-5 py-3 text-sm font-medium "
                  >
                    Register
                  </button>
                  <div className="">
                    Are you already registered?{" "}
                    <Link className="font-bold text-[#099718]" to={"/"}>
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
