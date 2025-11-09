import { useState, useEffect, useRef } from 'react';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import AMCbg from '../../assets/acu-bg-sample.svg';

export default function Layout({ children }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [vh, setVh] = useState('100dvh'); // default to dynamic viewport height

  // Toggle brightness on scroll
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Attempt autoplay programmatically
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setCanAutoplay(true);
        })
        .catch(() => {
          setCanAutoplay(false); // autoplay blocked
        });
    }
  }, []);

  // Handle iOS Safari viewport resizing quirks
  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.visualViewport) {
  //         // use visual viewport height for Safari iOS toolbars
  //         setVh(`${window.visualViewport.height}px`);
  //       } else {
  //         setVh('100dvh');
  //       }
  //     };

  //     handleResize();
  //     window.visualViewport?.addEventListener('resize', handleResize);
  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.visualViewport?.removeEventListener('resize', handleResize);
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);

  return (
    <div className="" style={{ minHeight: '100dvh' }}>
      {/* Background Video */}
      <video
        ref={videoRef}
        className={`fixed left-0 top-0 w-screen object-cover transition duration-500 ease-in-out ${!isVisible ? 'brightness-50' : 'brightness-50'}`}
        style={{ height: '100dvh' }}
        autoPlay
        muted
        loop
        playsInline
        // poster={AMCbg}
      >
        <source src={AMCbgVideo} type="video/mp4" />
      </video>

      {/* Optional fallback for browsers blocking autoplay */}
      {/* <img
        src={AMCbg}
        alt="Fallback background"
        className="fixed inset-0 -z-50 w-full object-cover opacity-30"
        style={{ height: vh }}
      /> */}

      {/* Main App Content */}
      <div className="sticky" style={{ height: vh }}>
        <main className="relative z-10">{children}</main>
      </div>
    </div>
  );
}
