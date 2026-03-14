import { createContext, useContext, useState } from "react";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  // ✅ Initialize token from localStorage
  const getToken = localStorage.getItem("JWT_TOKEN")
    ? JSON.parse(localStorage.getItem("JWT_TOKEN"))
    : null;

  const [token, setTokenState] = useState(getToken);

  // ✅ Wrap setToken to also save to localStorage
  const setToken = (newToken) => {
    setTokenState(newToken);
    if (newToken) {
      localStorage.setItem("JWT_TOKEN", JSON.stringify(newToken));
    } else {
      localStorage.removeItem("JWT_TOKEN");
    }
  };

  // Optional: Clear token explicitly
  const clearToken = () => {
    setToken(null);
  };

  return (
    <ContextApi.Provider value={{ token, setToken, clearToken }}>
      {children}
    </ContextApi.Provider>
  );
};

// ✅ Hook to use context
export const useStoreContext = () => {
  return useContext(ContextApi);
};
