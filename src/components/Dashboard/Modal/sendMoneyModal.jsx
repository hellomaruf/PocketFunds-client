import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React from "react";
import { PinInput } from "react-input-pin-code";

function SendMoneyModal({ open, close, isOpen }) {
  const [values, setValues] = React.useState(["", "", "", ""]);
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
              <div className="">
                <h2 className="text-sm pb-2">Enter Amount</h2>
                <input
                  className="p-6 placeholder:text-2xl placeholder:font-semibold placeholder:text-center text-center w-full outline-none rounded-xl text-3xl font-semibold text-[#099718]"
                  placeholder="0 BTD"
                  type="number"
                />
              </div>
              <div className=" mt-4">
                <h2 className="text-sm pb-2">Enter PIN</h2>
                <PinInput
                  values={values}
                  onChange={(value, index, values) => setValues(values)}
                />
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-[#099718] hover:bg-[#088114] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Send
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default SendMoneyModal;
