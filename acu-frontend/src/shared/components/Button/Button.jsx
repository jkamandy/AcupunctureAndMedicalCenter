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
const Button = ({ url, label, type = 'button', onClick, className = '', disabled = false,  bordered, standard}) => {
  return (
    <div >
      <button
        type={type}
        onClick={onClick}

      //   class="border-[1px] border-black p-1 m-1"
        className={`group ${className} ${bordered ? "bg-[#92BF7C] text-white hover:border-[transition:color_0.3s_ease-in-out;] rounded-[20px] hover:bg-[#85AE71]" : "text-white"} p-1 my-1 hover:scale-100`}
        disabled={disabled}
      >
        <a href={url} target="_blank" className={`${bordered ? "font-light" : "text-[#656565] group-hover:underline group-hover:text-[#92BF7C] font-normal group-hover:[transition:color_0.3s_ease-in-out;] group-hover:opacity-80"} m-3 text-[16px]  font-spartan tracking-[-0.1px] 4xl:text-[20px] `}>
          {label}
        </a>
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