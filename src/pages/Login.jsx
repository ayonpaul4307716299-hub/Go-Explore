import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    console.log('Logging in with:', { email, password });
    alert(`Welcome back, ${email}!`);
  };

  return (
    <div style={styles.container}>
      {/* Decorative background glow blobs */}
      <div style={styles.blobTeal}></div>
      <div style={styles.blobBlue}></div>

      <div style={styles.card}>
        <div style={styles.topAccent}></div>

        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Please enter your details to sign in.</p>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.options}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} />
              Remember me
            </label>
            <a href="#forgot" style={styles.link}>Forgot password?</a>
          </div>

          <button type="submit" style={styles.button}>
            Sign In
          </button>
        </form>

        <p style={styles.footerText}>
          Don't have an account? <a href="#signup" style={styles.link}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px)',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    overflow: 'hidden',
    padding: '2rem 1rem',
  },
  blobTeal: {
    position: 'absolute',
    top: '10%',
    left: '15%',
    width: '320px',
    height: '320px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0) 70%)',
    pointerEvents: 'none',
  },
  blobBlue: {
    position: 'absolute',
    bottom: '10%',
    right: '15%',
    width: '360px',
    height: '360px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(79, 70, 229, 0.45) 0%, rgba(79, 70, 229, 0) 70%)',
    pointerEvents: 'none',
  },
  card: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    backdropFilter: 'blur(12px)',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.35), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '400px',
    overflow: 'hidden',
    zIndex: 1,
  },
  topAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: 'linear-gradient(90deg, #10b981, #3b82f6, #6366f1)',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.75rem',
    fontWeight: '800',
    background: 'linear-gradient(90deg, #059669, #4f46e5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
  },
  subtitle: {
    margin: '0 0 1.5rem 0',
    fontSize: '0.875rem',
    color: '#64748b',
    textAlign: 'center',
  },
  error: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    border: '1px solid #fca5a5',
    padding: '0.75rem',
    borderRadius: '8px',
    fontSize: '0.875rem',
    marginBottom: '1rem',
    textAlign: 'center',
    fontWeight: '500',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.375rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#1e293b',
  },
  input: {
    padding: '0.75rem 0.875rem',
    borderRadius: '8px',
    border: '2px solid #cbd5e1',
    backgroundColor: '#f8fafc',
    fontSize: '1rem',
    color: '#0f172a',
    outline: 'none',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.875rem',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    color: '#475569',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '6px',
    accentColor: '#10b981',
  },
  link: {
    color: '#4f46e5',
    textDecoration: 'none',
    fontWeight: '600',
  },
  button: {
    background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 50%, #6366f1 100%)',
    color: '#ffffff',
    padding: '0.875rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '0.5rem',
    boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
  },
  footerText: {
    marginTop: '1.5rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: '#64748b',
  },
};

export default LoginPage;