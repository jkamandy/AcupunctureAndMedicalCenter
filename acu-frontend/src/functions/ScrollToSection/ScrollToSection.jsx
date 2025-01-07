import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Get the element with the id of the hash
      const element = document.getElementById(hash.replace('#', ''));

      if (element) {
        // Scroll the element into view
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]); // Trigger effect when hash changes

  return null; // This component does not render anything itself
};

export default ScrollToSection;
