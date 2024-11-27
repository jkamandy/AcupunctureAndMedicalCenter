import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable Button Component
 * 
 * @param {string} label - Text to display on the button.
 * @param {string} type - Button type (e.g., "button", "submit").
 * @param {function} onClick - Callback function to handle click events.
 * @param {string} className - Additional CSS classes for styling.
 * @param {boolean} disabled - Whether the button is disabled.
 */
const Button = ({ label, type = 'button', onClick, className = '', disabled = false,  bordered}) => {
  return (
    <div className='group'>
      <button
        type={type}
        onClick={onClick}
      //   class="border-[1px] border-black p-1 m-1"
        className={`${bordered && "border-[1px] border-[#656565] rounded-lg"} p-1 my-1 mx-5 hover:scale-105`}
        disabled={disabled}
      >
      <span className='m-3 uppercase text-[19px] font-normal font-spartan tracking-[-0.1px] text-[#656565] group-hover:underline group-hover:text-[#92BF7C] group-hover:opacity-80'>
      {label}
      </span>
      </button>
    </div>
  );
};

// Define prop types for better type safety
Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;