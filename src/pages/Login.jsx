import LoginHero from "../components/auth/LoginHero";
import LoginForm from "../components/auth/LoginForm";
import Loading from "../components/loading/Loading";

import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useContext } from "react";
import "../components/auth/Auth.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (isLoading) return <Loading />;

  return (
    <main role="login-page" aria-label="Login page">
      <LoginHero />
      <LoginForm
        login={login}
        setIsLoading={setIsLoading}
        error={error}
        setError={setError}
      />
    </main>
  );
};

export default Login;
