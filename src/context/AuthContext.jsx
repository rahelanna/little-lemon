import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("demoUser");
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (storedUser && isLoggedIn) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const stored = JSON.parse(localStorage.getItem("demoUser"));
    if (stored && stored.email === email && stored.password === password) {
      setUser(stored);
      localStorage.setItem("loggedIn", "true");
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    const newUser = { name, email, password };
    localStorage.setItem("demoUser", JSON.stringify(newUser));
    setUser(newUser);
    localStorage.setItem("loggedIn", "true");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedIn");
  };

  const value = { user, login, signup, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
