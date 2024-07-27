import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

function AgentReq() {
  let count = 1;
  const { refetch, data: userData } = useQuery({
    queryKey: ["agentReq"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/reqUser/agent");
      return data;
    },
  });

  // make agent functionality***********
  const handleAgent = (id) => {
    console.log(id);
    axios
      .patch(`http://localhost:3000/agentReq/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount === 1) {
          toast.success("Successfull!");
          refetch;
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          refetch;
        }
      });
  };

  return (
    <div className="-z-0">
        <input
        type="text"
        placeholder="Search Agent By Name...."
        className="input input-bordered w-full max-w-xs my-4 mx-6"
      />
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
                      user?.status === "pending"
                        ? "badge badge-warning"
                        : "badge badge-accent"
                    }
                  >
                    {user?.status}
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => handleAgent(user?._id)}
                    className="btn btn-sm bg-[#099718] text-white rounded-full hover:bg-[#077012]"
                  >
                    Make Agent
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

export default AgentReq;
