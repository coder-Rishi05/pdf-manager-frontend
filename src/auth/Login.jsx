import axios from "axios";
import React, { useState } from "react";
import Dashboard from "../components/pages/Dashboard";

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0a0a0a",
    fontFamily: "'Sora', sans-serif",
    padding: "1rem",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#111111",
    border: "1px solid #222",
    borderRadius: "20px",
    padding: "2.5rem 2rem",
  },
  header: {
    marginBottom: "2rem",
  },
  dot: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "#7c5cfc",
    marginBottom: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#ffffff",
    margin: "0 0 6px 0",
    letterSpacing: "-0.3px",
  },
  subtitle: {
    fontSize: "13px",
    color: "#666",
    margin: 0,
  },
  errorBox: {
    background: "#1f0f0f",
    border: "1px solid #3d1515",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "13px",
    color: "#f87171",
    marginBottom: "1.25rem",
  },
  fieldWrap: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    fontSize: "12px",
    fontWeight: "500",
    color: "#888",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.6px",
  },
  input: {
    width: "100%",
    height: "44px",
    padding: "0 14px",
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "14px",
    fontFamily: "'Sora', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },
  forgotWrap: {
    textAlign: "right",
    marginBottom: "1.5rem",
    marginTop: "-4px",
  },
  forgot: {
    fontSize: "12px",
    color: "#555",
    textDecoration: "none",
    cursor: "pointer",
  },
  btnPrimary: {
    width: "100%",
    height: "44px",
    background: "#7c5cfc",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "'Sora', sans-serif",
    cursor: "pointer",
    transition: "opacity 0.2s, transform 0.1s",
    letterSpacing: "0.2px",
  },
  btnPrimaryDisabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "1.25rem 0",
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    background: "#222",
  },
  dividerText: {
    fontSize: "12px",
    color: "#444",
    whiteSpace: "nowrap",
  },
  btnGoogle: {
    width: "100%",
    height: "44px",
    background: "transparent",
    border: "1px solid #2a2a2a",
    borderRadius: "10px",
    color: "#ccc",
    fontSize: "14px",
    fontFamily: "'Sora', sans-serif",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "border-color 0.2s, background 0.2s",
    fontWeight: "500",
  },
  signupRow: {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "13px",
    color: "#555",
  },
  signupLink: {
    color: "#7c5cfc",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
  },
};

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <path
      fill="#4285F4"
      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
    />
    <path
      fill="#FBBC05"
      d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
    />
    <path
      fill="#EA4335"
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.96l3.007 2.332C4.672 5.163 6.656 3.58 9 3.58z"
    />
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const login = async () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        { withCredentials: true },
      );
      console.log(data.message);
      // redirect here after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google/callback";
  };

  const getInputStyle = (field) => ({
    ...styles.input,
    borderColor: focusedField === field ? "#7c5cfc" : "#2a2a2a",
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.dot}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 2L11.5 7H16.5L12.5 10.5L14 15.5L9 12.5L4 15.5L5.5 10.5L1.5 7H6.5L9 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 style={styles.h1}>Welcome back</h1>
            <p style={styles.subtitle}>Sign in to continue</p>
          </div>

          {error && <div style={styles.errorBox}>{error}</div>}

          <form onSubmit={(e) => e.preventDefault()}>
            <div style={styles.fieldWrap}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                style={getInputStyle("email")}
              />
            </div>

            <div style={styles.fieldWrap}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                style={getInputStyle("password")}
              />
            </div>

            <div style={styles.forgotWrap}>
              <span style={styles.forgot}>Forgot password?</span>
            </div>

            <button
              onClick={login}
              disabled={loading}
              style={{
                ...styles.btnPrimary,
                ...(loading ? styles.btnPrimaryDisabled : {}),
              }}
              onMouseEnter={(e) => {
                if (!loading) e.target.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "1";
              }}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div style={styles.divider}>
            <div style={styles.dividerLine} />
            <span style={styles.dividerText}>or continue with</span>
            <div style={styles.dividerLine} />
          </div>

          <button
            onClick={handleGoogleLogin}
            style={styles.btnGoogle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#444";
              e.currentTarget.style.background = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2a2a";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <p style={styles.signupRow}>
            Don't have an account?{" "}
            <span style={styles.signupLink}>Sign up</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
