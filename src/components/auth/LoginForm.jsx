import { Icon } from "@iconify/react";

const LoginForm = ({ login, setIsLoading, error, setError }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    await new Promise((r) => setTimeout(r, 1200));

    const success = login(email, password);
    setIsLoading(false);

    if (!success) {
      setError("Invalid email or password");
      return;
    }

    window.location.href = "/";
  };

  return (
    <section
      className="auth-form-section"
      role="region"
      aria-labelledby="login-form-title"
    >
      <form
        className="auth-form"
        onSubmit={handleSubmit}
        aria-label="User login form"
      >
        <h2 id="login-form-title">Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            aria-label="Email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            aria-required="true"
            aria-label="Password"
          />
        </div>

        {error && (
          <div
            className="error-message"
            role="alert"
            aria-live="assertive"
            aria-label="Login error message"
          >
            <Icon icon="mdi:alert-circle" />
            {error}
          </div>
        )}

        <button
          type="submit"
          className="submit-btn"
          aria-label="Login to your account"
        >
          Login
          <Icon icon="mdi:arrow-right" />
        </button>

        <p className="auth-link" aria-label="Sign up link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
