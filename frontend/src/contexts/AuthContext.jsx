import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const tokenManage = useMemo(() => {
    return { token, setToken, user, setUser };
  }, [token, user]);

  return (
    <AuthContext.Provider value={tokenManage}>{children}</AuthContext.Provider>
  );
}
AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export const useAuth = () => useContext(AuthContext);
