import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useCurrentUser() {
  const currentUserEmail = localStorage.getItem("userEmail");
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:3000/loggedUser/${currentUserEmail}`
      );
      return data;
    },
  });
  return { user };
}

export default useCurrentUser;
