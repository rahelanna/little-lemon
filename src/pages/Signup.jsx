import Loading from "../components/loading/Loading";
import SignupHero from "../components/auth/SignupHero";
import SignupForm from "../components/auth/SignupForm";

import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../components/auth/Auth.css";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (isLoading) return <Loading />;

  return (
    <main role="signup-page" aria-label="Signup page">
      <SignupHero />
      <SignupForm
        signup={signup}
        setIsLoading={setIsLoading}
        success={success}
        setSuccess={setSuccess}
        error={error}
        setError={setError}
      />
    </main>
  );
};

export default Signup;
