import * as React from 'react';
import Box from '@mui/material/Box';
import { SwipeableDrawer, Fade } from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';

import AMCbanner from '../../assets/acu-banner-light.svg';
import AMClogo from '../../assets/acu-logo.svg';

import fb from '../../assets/icons/Facebook.svg';
import yp from '../../assets/icons/Yelp.svg';
import ins from '../../assets/icons/Instagram.svg';
import ml from '../../assets/icons/Mail.svg';

const NavDrawer = ({ links }) => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Change background color when drawer opens
  React.useEffect(() => {
    if (open) {
      document.body.style.backgroundColor = '#252525';
    } else {
      document.body.style.backgroundColor = '#000';
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [open]);

  // Lock body scroll on drawer open (iOS fix)
  React.useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    const preventTouch = (e) => e.preventDefault();

    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('touchmove', preventTouch, {
        passive: false,
      });
    } else {
      document.body.style.overflow = originalStyle;
      document.body.removeEventListener('touchmove', preventTouch);
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.removeEventListener('touchmove', preventTouch);
    };
  }, [open]);

  const DrawerList = (
    <Box
      className="w-screen pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] sm:w-[640px]"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* Drawer header */}
      <div className="flex items-center justify-between">
        <img src={AMCbanner} className="w-3/4 scale-90" />
        <GrClose
          className="mr-8 cursor-pointer text-[24px] text-[#F3F3F3] hover:text-[#92BF7C]"
          onClick={toggleDrawer(false)}
        />
      </div>

      <Divider />

      {/* Navigation links */}
      <List>
        {[
          ['Home', '/'],
          ['About', '/About'],
          ['Services', '/OurServices'],
          ['Testimonials', '/Testimonials'],
          ['FAQ', '/FAQ'],
          ['Contact', '/Contact'],
        ].map(([label, path]) => (
          <Link key={label} to={path}>
            <ListItem
              disablePadding
              className={`${location.pathname === path ? 'w-full bg-[#92BF7C] bg-opacity-20' : ''}`}
            >
              <ListItemButton>
                <ListItemText
                  className="ml-10 self-start font-spartan text-[20px] text-[#F3F3F3]"
                  primary={label}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      {/* Footer section */}
      <div className="mt-[50px] flex w-full flex-col items-center justify-center">
        <span className="text-center font-spartan text-[15px] font-light text-[#D6D6D6] 2lg:text-[18px]">
          Tel:{' '}
          <a
            href="tel:9492061040"
            className="font-spartan text-[18px] font-semibold text-[#D6D6D6] hover:underline"
          >
            (949) 206-1040
          </a>{' '}
          <div className="mt-3 flex flex-col">
            <span>30212 Tomas, Suite 180</span>
            <span>Rancho Santa Margarita, CA 92688</span>
          </div>
        </span>

        <div className="mt-6 flex w-full items-center justify-center [&_a:not(:first-of-type)]:ml-5">
          <a
            href="https://www.instagram.com/acupunctureandmedicalcenter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ins} className="hover:scale-105" />
          </a>
          <a
            href="https://www.yelp.com/biz/acupuncture-medical-center-rancho-santa-margarita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={yp} className="hover:scale-105" />
          </a>
          <a
            href="https://www.facebook.com/acupunctureandmedical/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fb} className="hover:scale-105" />
          </a>
          <a href="mailto:drmehrg@gmail.com">
            <img src={ml} className="hover:scale-105" />
          </a>
        </div>

        {/* <div className="mt-[50px]">
          <img src={AMClogo} />
        </div> */}
      </div>
    </Box>
  );

  return (
    <div className="relative">
      {/* Hamburger button stays above overlay */}
      <Button
        className="relative z-50 ml-3 bg-black bg-opacity-40 font-spartan text-[24px] text-[#F3F3F3]"
        onClick={toggleDrawer(true)}
      >
        <RxHamburgerMenu className="shadow-lg" />
      </Button>

      {/* Overlay covers page content but is under the button */}
      <Fade in={open} timeout={300}>
        <div
          className="fixed inset-0 z-[2000] bg-black opacity-50"
          onClick={toggleDrawer(false)}
        />
      </Fade>

      {/* Drawer */}
      <SwipeableDrawer
        anchor="right"
        className="font-spartan"
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#252525',
            height: '100vh',
            zIndex: 2001,
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          },
          '& .MuiTypography-root': {
            fontFamily: '"League Spartan", sans-serif',
            fontSize: '18px',
          },
          '& .MuiButton-root': {
            minWidth: '50px',
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {DrawerList}
      </SwipeableDrawer>
    </div>
  );
};

export default NavDrawer;
