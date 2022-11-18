import { createContext } from "react";

interface user {
  key: string;
  username: string;
}

const userContext = createContext({
  user: {} as user,
  setUser: (user: user) => {}
});

export default userContext;