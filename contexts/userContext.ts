import { createContext } from "react";

interface user {
  username: string,
}

const userContext = createContext({
  user: {} as user,
  setUser: (auth: any) => {}
});

export default userContext;