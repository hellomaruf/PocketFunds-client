import cashIn from "../../assets/cashIn.png";
import cashOut from "../../assets/cashOut.png";
import sendMoney from "../../assets/send.png";

function Dashboard() {
  return (
    <div className="max-w-[1480px] mx-auto">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-6">
          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl py-6 px-3">
              <div className=" ">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex flex-col rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-3 px-4 py-8 text-center">
                    <dt className="order-last font-medium text-gray-500 mt-2 text-xl">
                      Send Money
                    </dt>

                    <img className="w-28 mx-auto" src={sendMoney} alt="" />
                  </div>

                  <div className="flex flex-col rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-3 px-4 py-8 text-center">
                    <dt className="order-last  font-medium text-gray-500 mt-2 text-xl">
                      Cash In
                    </dt>

                    <img className="w-28 mx-auto" src={cashIn} alt="" />
                  </div>

                  <div className="flex flex-col rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300 px-4 py-8 text-center">
                    <dt className="order-last  font-medium text-gray-500 mt-2 text-xl">
                      Cash Out
                    </dt>

                    <img className="w-28 mx-auto" src={cashOut} alt="" />
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
        <div className="col-span-2">
          <div className="bg-gradient-to-r from-[#099718] to-[#03550b] h-[300px]  my-6 rounded-3xl">
            <div className="p-4 flex items-center justify-between">
              <h2 className=" text-2xl font-medium  text-white">
                Total Ammount
              </h2>
              <div className="flex">
                <div className="h-10 w-10 bg-slate-50 rounded-full opacity-25"></div>
                <div className="h-10 w-10 bg-slate-50 rounded-full opacity-25 relative -left-4"></div>
              </div>
            </div>
            <div className="p-4 text-gray-200">
              <p>
                Distinctively cultivate progressive scenarios via
                principle-centered web-readiness. Appropriately administrate
                24/365 portals via resource maximizing markets. Competently.
              </p>
            </div>
            <div className="p-4">
              <h2 className="text-4xl font-bold text-white">200 TK</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
