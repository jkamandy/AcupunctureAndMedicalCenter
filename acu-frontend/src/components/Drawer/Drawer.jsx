import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
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

const NavDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState('');
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const DrawerList = (
    <Box
      className="w-screen sm:w-[640px]"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="flex items-center justify-between">
        <img src={AMCbanner} className="w-3/4 scale-90"></img>
        <GrClose
          className="mr-8 cursor-pointer text-[24px] text-[#F3F3F3] hover:text-[#92BF7C]"
          onClick={toggleDrawer(false)}
        />
      </div>
      <Divider />
      <List>
        {[
          ['Home', '/'],
          ['About', '/About'],
          ['Services', '/OurServices'],
          ['FAQ', '/FAQ'],
          ['Contact', '/Contact'],
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              to={text[1]}
              className={`${location.pathname === text[1] ? 'w-full bg-[#92BF7C] bg-opacity-20' : ''}`}
              //   onClick={() => handleSetActiveLink(text[1])}
            >
              <ListItemButton>
                <ListItemText
                  className="ml-10 self-start font-spartan text-[20px] text-[#F3F3F3]"
                  primary={text[0]}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <div className="mt-[200px] flex w-full flex-col items-center justify-center">
        <span className="font-spartan font-light text-[#D6D6D6] drop-shadow-md 4xl:text-[18px]">
          Rancho Santa Margarita • (949)-206-1040
        </span>{' '}
        <div className="mt-6 flex w-full items-center justify-center [&_a:not(:first-of-type)]:ml-5">
          <a href="">
            <img src={ins} className="hover:scale-105"></img>
          </a>
          <a>
            <img src={yp} className="hover:scale-105"></img>
          </a>
          <a>
            <img src={fb} className="hover:scale-105"></img>
          </a>
          <a href="mailto:test@gmail.com">
            <img src={ml} className="hover:scale-105" href=""></img>
          </a>
        </div>
        <div className="mt-[100px]">
          <img src={AMClogo}></img>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button
        className="ml-3 bg-black bg-opacity-40 font-spartan text-[24px] text-[#F3F3F3]"
        onClick={toggleDrawer(true)}
      >
        <RxHamburgerMenu className="shadow-lg" />
      </Button>
      <Drawer
        className="font-spartan"
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#252525',
            // opacity: '80%',
          },
          '& .MuiTypography-root': {
            fontFamily: '"League Spartan", sans-serif',
            fontSize: '18px',
          },
          '& .MuiButtonBase-root': {
            minWidth: '50px',
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default NavDrawer;
