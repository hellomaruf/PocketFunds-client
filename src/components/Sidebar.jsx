import { NavLink } from "react-router-dom";
import logo from "../assets/pocket.png";
import { LuMenu } from "react-icons/lu";
function Sidebar() {
  return (
    <div>
      <div className="drawer z-10">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content py-3 mx-6">
          <div className=" flex gap-2">
            <div className="">
              <label
                htmlFor="my-drawer"
                className=" drawer-button text-2xl btn"
              >
                <LuMenu />
              </label>
            </div>
            <div className=" flex items-center gap-2">
              <img className="w-8" src={logo} alt="" />
              <h2 className="text-2xl font-semibold text-center text-[#099718]">
                PocketFunds
              </h2>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <div className=" flex items-center gap-2">
              <img className="w-10" src={logo} alt="" />
              <h2 className="text-3xl font-semibold text-center text-[#099718]">
                PocketFunds
              </h2>
            </div>
            <div className=" mt-6 space-y-2">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    ` py-3 rounded-full ${
                      isActive
                        ? "bg-gradient-to-r from-[#03550b] to-[#099718] text-white hover:bg-[#1f3568]"
                        : "bg-gray-200 text-gray-900 "
                    }`
                  }
                  to={"dashboard"}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    ` py-3 rounded-full ${
                      isActive
                        ? "bg-gradient-to-r from-[#03550b] to-[#099718] text-white hover:bg-[#1f3568]"
                        : "bg-gray-200  "
                    }`
                  }
                  to={"userReq"}
                >
                  User Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    ` py-3 rounded-full ${
                      isActive
                        ? "bg-gradient-to-r from-[#03550b] to-[#099718] text-white hover:bg-[#1f3568]"
                        : "bg-gray-200 text-gray-900 "
                    }`
                  }
                  to={"agentReq"}
                >
                  Agent Request
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
