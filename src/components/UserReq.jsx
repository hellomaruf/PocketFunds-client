import axios from "axios";
import { useEffect, useState } from "react";

function UserReq() {
  let count = 1
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/reqUser/user").then((res) => {
      setUserData(res.data);
    });
  }, []);

  console.log(userData);

  return (
    <div className="-z-0">
      <div className="overflow-x-auto mx-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg text-[#099718]">Name</th>
              <th className="text-lg text-[#099718]">Email</th>
              <th className="text-lg text-[#099718]">Phone Number</th>
              <th className="text-lg text-[#099718]">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user, index) => (
              <tr key={index}>
                <th>{ count++}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phoneNum}</td>
                <td>
                  <div className="badge badge-warning">{user?.status}</div>
                </td>
                <td>
                  <div className="btn btn-sm bg-[#099718] text-white rounded-full hover:bg-[#077012]">
                    Make User
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserReq;
