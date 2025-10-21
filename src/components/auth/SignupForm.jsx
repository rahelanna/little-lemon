import { Icon } from "@iconify/react";

const SignupForm = ({
  signup,
  setIsLoading,
  success,
  setSuccess,
  error,
  setError,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirm = e.target.confirm.value.trim();

    if (password !== confirm) {
      setIsLoading(false);
      setError("Passwords do not match");
      return;
    }

    await new Promise((r) => setTimeout(r, 1500));

    signup(name, email, password);
    setSuccess(true);
    setIsLoading(false);

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <section
      className="auth-form-section"
      role="region"
      aria-labelledby="signup-form-title"
    >
      <form
        className="auth-form"
        onSubmit={handleSubmit}
        aria-label="User signup form"
      >
        <h2 id="signup-form-title">Sign Up</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="e.g. Howard Phillips Lovecraft"
            aria-required="true"
            aria-label="Full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="e.g. cthulhu@deepsea.com"
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
            placeholder="Choose a password"
            aria-required="true"
            aria-label="Password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            id="confirm"
            name="confirm"
            required
            placeholder="Repeat password"
            aria-required="true"
            aria-label="Confirm password"
          />
        </div>

        {error && (
          <div
            className="error-message"
            role="alert"
            aria-live="assertive"
            aria-label="Signup error message"
          >
            <Icon icon="mdi:alert-circle" />
            {error}
          </div>
        )}

        {success && (
          <div
            className="success-message"
            role="status"
            aria-live="polite"
            aria-label="Signup success message"
          >
            <Icon icon="mdi:check-circle" />
            Registration successful! Redirecting...
          </div>
        )}

        <button
          type="submit"
          className="submit-btn"
          aria-label="Create your account"
        >
          Sign Up
          <Icon icon="mdi:arrow-right" />
        </button>

        <p className="auth-link" aria-label="Login link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </section>
  );
};

export default SignupForm;
