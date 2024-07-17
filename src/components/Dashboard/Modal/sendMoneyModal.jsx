import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import axios from "axios";
import React from "react";
import { PinInput } from "react-input-pin-code";
import useCurrentUser from "../../../Hooks/useCurrentUser";
import toast from "react-hot-toast";
// import { useQuery } from "@tanstack/react-query";

function SendMoneyModal({ close, isOpen }) {
  const [values, setValues] = React.useState(["", "", "", ""]);
  const { user } = useCurrentUser();

  const handleSendMoney = async (e) => {
    e.preventDefault();
    const sendAmount = e.target.sendAm?.value;
    const email = e.target.email?.value;
    console.log(sendAmount);
    console.log(values);
    const sendMoneyInfo = {
      sendAmount,
      pin: values,
      senderEmail: user?.email,
      receverEmail: email,
    };

    await axios
      .patch("http://localhost:3000/sendMoney", sendMoneyInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Send money Successfully!") {
          toast.success(res.data.message);
        } else {
          toast.error("Something Wrong!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/70 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-2xl text-center font-semibold text-gray-800 pb-3"
              >
                Send Money
              </DialogTitle>
              <form onSubmit={handleSendMoney}>
                <div className="">
                  <h2 className="text-sm pb-2">Enter Amount</h2>
                  <input
                    className="p-6 placeholder:text-2xl placeholder:font-semibold placeholder:text-center text-center w-full outline-none rounded-xl text-3xl font-semibold text-[#099718]"
                    placeholder="0 BTD"
                    //   value={12}
                    name="sendAm"
                    type="number"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <h2 className="text-sm pb-2">Enter the email</h2>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none  outline  focus:outline-[#099718]"
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
                <div className=" mt-4">
                  <h2 className="text-sm pb-2">Enter PIN</h2>
                  <PinInput
                    type="numeric"
                    values={values}
                    onChange={(value, index, values) => setValues(values)}
                  />
                </div>
                <div className="mt-4">
                  <button
                    onClick={close}
                    className="inline-flex items-center gap-2 rounded-md bg-[#099718] hover:bg-[#088114] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  >
                    Send
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default SendMoneyModal;
