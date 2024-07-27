import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

function UserReq() {
  let count = 1;
  const { data: userData, refetch } = useQuery({
    queryKey: ["userReq"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/reqUser/user");
      return data;
    },
  });
  const handleUser = (id) => {
    axios
      .patch(`http://localhost:3000/userReq/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Successfull");
          refetch;
        }
      })
      .catch((error) => {
        console.log(error.message);
        refetch;
      });
  };
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
                <th>{count++}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phoneNum}</td>
                <td>
                  <div
                    className={
                      user?.status === "accepted"
                        ? "badge badge-accent"
                        : "badge badge-warning"
                    }
                  >
                    {user?.status}
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => handleUser(user?._id)}
                    className="btn btn-sm bg-[#099718] text-white rounded-full hover:bg-[#077012]"
                  >
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
