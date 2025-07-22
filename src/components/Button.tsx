// src/components/Button.tsx
import React from 'react';
import './../styles/Button.css'; // Importing the button's CSS styling

// Define the props for the Button component
type ButtonProps = {
  text: string; // The text displayed on the button
  onClick?: () => void; // Optional callback function triggered when button is clicked
  alignment?: 'left' | 'center' | 'right'; // Optional button alignment within its container
  colorTheme?: 'blue' | 'green' | 'red' | 'gray'; // Optional color theme for the button
  type?: 'primary' | 'secondary'; // Optional type for button style (primary/secondary)
};

// Button component definition
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  alignment = 'left', // Default alignment is left
  colorTheme = 'blue', // Default color theme is blue
  type = 'primary', // Default type is primary
}) => {
  // Dynamic class names for button and container based on props
  const buttonClasses = `button ${colorTheme} ${type}`; // E.g., 'button blue primary'
  const containerClass = `button-container ${alignment}`; // E.g., 'button-container left'

  return (
    // Container div with flexbox alignment
    <div className={containerClass}>
      {/* Button element with dynamic class names and click handler */}
      <button className={buttonClasses} onClick={onClick}>
        {text} {/* Display the button text */}
      </button>
    </div>
  );
};

export default Button; // Export the Button component for use in other parts of the application
