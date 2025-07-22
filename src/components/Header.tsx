// src/components/Header.tsx
import React, { Component } from 'react';
import './../styles/Header.css'; // Importing the header CSS for styling
import Button from './Button'; // Import the reusable Button component

/**
 * Props for the Header component.
 */
type HeaderProps = {
  /** Whether to show the website name text */
  showWebsiteName?: boolean;

  /** The actual website name text */
  websiteName?: string;

  /** Whether to show the action button on the right */
  showButton?: boolean;

  /** Text to display on the action button */
  buttonText?: string;

  /** Callback triggered when the button is clicked */
  onButtonClick?: () => void;

  /** Image URL for the logo */
  srcName?: string;

  /** Color theme for the button */
  buttonColorTheme?: 'blue' | 'green' | 'red' | 'gray';

  /** Type of button: primary (filled) or secondary (subtle) */
  buttonType?: 'primary' | 'secondary';

  /** Alignment of the button (optional for flexibility) */
  alignment?: 'left' | 'center' | 'right';

  /** Whether the page has been scrolled */
  isScrolled?: boolean;

  /** Whether the mobile menu is open */
  isMobileMenuOpen?: boolean;

  /** Function to toggle the mobile menu visibility */
  handleMenuToggle?: () => void;
};

/**
 * A reusable header component with logo, title, and optional action button.
 * Suitable for page headers, navigation bars, or landing banners.
 */
class Header extends Component<HeaderProps> {
  static defaultProps = {
    showWebsiteName: true,
    websiteName: 'BigMatchEnergy',
    showButton: true,
    buttonText: 'Login',
    srcName: 'https://via.placeholder.com/40', // Placeholder image for the logo
    buttonColorTheme: 'blue',
    buttonType: 'primary',
    alignment: 'right',
    isScrolled: false,
    isMobileMenuOpen: false,
    handleMenuToggle: () => {}, // Default no-op function for menu toggle
  };

  render() {
    const {
      showWebsiteName,
      websiteName,
      showButton,
      buttonText,
      onButtonClick,
      srcName,
      buttonColorTheme,
      buttonType,
      alignment,
      isScrolled,
      isMobileMenuOpen,
      handleMenuToggle,
    } = this.props;

    return (
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        {/* Logo and website name container */}
        <div className="logo-container">
          <img className="logo" src={srcName} alt="Logo" />
          {showWebsiteName && <span className="website-name">{websiteName}</span>}
        </div>

        {/* Mobile menu toggle icon */}
        <div className="menu-icon" onClick={handleMenuToggle}>
          <i className="fa fa-bars"></i> {/* Hamburger menu icon */}
        </div>

        {/* Navigation links (conditionally shown for mobile) */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </nav>

        {/* Show action button if enabled */}
        {showButton && (
          <div className={`header-button-wrapper ${alignment}`}>
            <Button
              text={buttonText!} // Non-null assertion (we provide a default value in defaultProps)
              onClick={onButtonClick}
              colorTheme={buttonColorTheme!} // Non-null assertion
              type={buttonType!} // Non-null assertion
              alignment={alignment}
            />
          </div>
        )}
      </header>
    );
  }
}

export default Header; // Exporting the Header component for use in other parts of the app