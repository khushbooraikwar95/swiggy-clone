import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    email: "Dummymail@gmail.com",
  },
});
export default UserContext;
