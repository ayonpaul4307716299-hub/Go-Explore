import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Explor', href: '/Explor' },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Brand Logo */}
        <a href="/" style={styles.logo}>
          <div style={styles.logoIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>
          </div>
          <span style={styles.logoText}>
            Go <span style={{ color: '#10b981' }}>Explor</span>
          </span>
        </a>

        {/* Desktop Links */}
        {!isMobile && (
          <ul style={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  style={{
                    ...styles.link,
                    color: activeLink === link.name ? '#10b981' : '#e2e8f0',
                    borderBottom: activeLink === link.name ? '2px solid #10b981' : '2px solid transparent',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop Action Buttons */}
        {!isMobile && (
          <div style={styles.actions}>
            <a href="/login" style={styles.loginBtn}>
              Login
            </a>
            <a href="/book" style={styles.bookBtn}>
              Book Now →
            </a>
          </div>
        )}

        {/* Mobile Hamburger Toggle */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={styles.hamburger}
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && isOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setIsOpen(false);
              }}
              style={{
                ...styles.mobileLink,
                color: activeLink === link.name ? '#10b981' : '#e2e8f0',
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={styles.mobileActions}>
            <a href="/login" style={styles.mobileLoginBtn}>
              Login
            </a>
            <a href="/book" style={styles.mobileBookBtn}>
              Book Now →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#1e293b',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  navContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
    height: '76px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    textDecoration: 'none',
  },
  logoIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    backgroundColor: '#10b981',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '2.25rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '600',
    paddingBottom: '6px',
    transition: 'color 0.2s ease',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  loginBtn: {
    padding: '0.55rem 1.25rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  bookBtn: {
    padding: '0.6rem 1.35rem',
    borderRadius: '10px',
    background: 'linear-gradient(90deg, #4f46e5 0%, #6366f1 100%)',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.35)',
  },
  hamburger: {
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: '#ffffff',
    fontSize: '1.35rem',
    padding: '0.4rem 0.75rem',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0f172a',
    padding: '1.25rem 1.5rem 1.75rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    gap: '1rem',
  },
  mobileLink: {
    textDecoration: 'none',
    fontSize: '1.05rem',
    fontWeight: '600',
    padding: '0.5rem 0',
  },
  mobileActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '0.5rem',
  },
  mobileLoginBtn: {
    textAlign: 'center',
    padding: '0.75rem',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 2, 0.15)',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '600',
  },
  mobileBookBtn: {
    textAlign: 'center',
    padding: '0.75rem',
    borderRadius: '10px',
    background: 'linear-gradient(90deg, #4f46e5 0%, #6366f1 100%)',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '600',
  },
};

export default Navbar;