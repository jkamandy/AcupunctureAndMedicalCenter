import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import AMCbg from '../../assets/acu-bg-sample.svg';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //   useEffect(() => {
  //     // Optional: dynamically toggle brightness based on scroll or route
  //     setIsVisible(true);
  //   }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        className={`fixed inset-0 -z-50 h-full w-full object-cover transition duration-500 ease-in-out ${
          !isVisible ? 'brightness-50' : 'brightness-100'
        }`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={AMCbgVideo} type="video/mp4" />
      </video>

      {/* Optional Fallback for browsers that block autoplay */}
      {/* <img
        src={AMCbg}
        alt="Fallback background"
        className="fixed inset-0 -z-50 h-full w-full object-cover opacity-30"
      /> */}

      {/* Main App Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
