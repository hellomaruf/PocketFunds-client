import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../assets/loginImg.png";
import { PinInput } from "react-input-pin-code";

function Login() {
  const handleLogin = () => {};
  const [values, setValues] = React.useState(["", "", "", ""]);
  console.log(values);
  return (
    <div>
      <div className="grid grid-cols-2 items-center h-screen ">
        <div className="bg-gradient-to-r from-[#2A468A] h-full to-[#233863] rounded-r-[40px]  flex flex-col items-center justify-center">
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
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <div className=" bg-gray-50 rounded-3xl shadow-lg">
                {/* <p className='text-sm pt-2 pl-4'>If you have not registered then click on sign up button</p> */}
                <form
                  onSubmit={handleLogin}
                  action="#"
                  className="mb-0 mt-6 space-y-4 rounded-3xl p-4 bg-white  sm:p-6 lg:p-8"
                >
                  <p className="text-center text-lg font-medium">
                    Sign in to your account
                  </p>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none bg-gray-50 outline  focus:outline-[#2A4589]"
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
                  <div className="">
                    <h2 className="text-sm pb-2">Enter PIN</h2>
                    <PinInput
                      values={values}
                      onChange={(value, index, values) => setValues(values)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="block w-full rounded-lg bg-[#2A468A] text-white px-5 py-3 text-sm font-medium "
                  >
                    Login
                  </button>
                  <div className="">
                    If you are not registered.{" "}
                    <Link className="font-bold text-[#2A4589]" to={"/register"}>
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
