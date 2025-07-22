import React, { useState, useEffect } from 'react';

import Header from './../components/Header';
import Button from './../components/Button';
import './../styles/Homepage.css';
import logo from './../assets/logo.png';

/**
 * The Homepage component renders the main landing page with a hero section, features, and a navigation bar.
 * It manages the mobile menu toggle, scroll events for navbar style, and smooth scrolling.
 */
const Homepage: React.FC = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State to manage the scroll state of the navbar
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  // Effect to detect scroll position and modify navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggles mobile menu visibility
  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handles smooth scrolling when navigating between sections
  // const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  //   e.preventDefault();
  //   const targetElement = document.querySelector(targetId);
  //   if (targetElement) {
  //     window.scrollTo({
  //       top: (targetElement as HTMLElement).offsetTop - 80, // Account for the fixed header height
  //       behavior: 'smooth',
  //     });
  //     setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  //   }
  // };

  return (
    <div>
      {/* Header component with dynamic props for website name, logo, and button */}
      <Header
        showWebsiteName={true}
        websiteName="BigMatchEnergy"
        showButton={true}
        buttonText="Login"
        onButtonClick={() => alert('Login functionality is not implemented yet.')}
        srcName={logo}
        buttonColorTheme="blue"
        buttonType="primary"
        alignment="right"
        isScrolled={isNavbarScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMenuToggle={handleMenuToggle}
      />

      {/* Hero section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-circle -right-20 -top-20"></div>
          <div className="hero-bg-circle -left-20 -bottom-20"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-heading">
            Tired of swiping? Try matching with real stats.
          </h1>
          <p className="hero-subheading">
            Our algorithm matches people based on <span className="font-bold">actual physical, lifestyle traits, and achievements</span>, not just pretty faces.
          </p>
          <div className="hero-buttons">
            {/* Register and Learn More buttons */}
            <Button
              text="Register Now"
              onClick={() => alert('Registration functionality is not implemented yet.')}
              colorTheme="blue"
              type="primary"
              alignment="center"
            />
            <Button
              text="Learn More"
              onClick={() => alert('Learn More functionality is not implemented yet.')}
              colorTheme="blue"
              type="secondary"
              alignment="center"
            />
          </div>
          <div className="hero-images">
            <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2020-03/eamesbotshutterstock.jpg?itok=8zkzODkw" alt="pic1" />
            <img src="https://cdn.sanity.io/images/68lp9qid/production/e49309a0bbe3b7497c01e3423f8f134ac97fd4ae-1200x750.jpg/Throning-Editorial.jpg?rect=38,0,1125,750&w=1200&h=800&fit=min&auto=format" alt="pic2" />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section id="features" className="features">
        <div className="features-container">
          <div className="text-center mb-16">
            <h2 className="features-heading">How We're Different (And Proud of It)</h2>
            <p className="features-subheading">Our unique approach to dating uses real data to find your perfect match.</p>
          </div>
          <div className="features-grid">
            {/* Each feature with an icon and description */}
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="feature-title">Data - Driven Matching</h3>
              <p className="feature-description">Find a partner that matches your social standing.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="feature-title">Unique Trait Fields</h3>
              <p className="feature-description">Men submit girth & length. Women submit bust & hips. Yes, we take it seriously.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="feature-title">Private & Secure</h3>
              <p className="feature-description">Your data is encrypted and never shared. GDPR & PIPEDA compliant.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="feature-title">Real - Time Chat</h3>
              <p className="feature-description">Mutual likes = instant messaging. Clean UI. Push notifications supported.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage; // Exporting the Homepage component