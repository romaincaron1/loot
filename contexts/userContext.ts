import { createContext } from "react";

const userContext = createContext({
  user: {} as user,
  setUser: (user: user) => {}
});

export default userContext;