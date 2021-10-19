import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

import AppBar from "@mui/material/AppBar";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from "@mui/material/Toolbar";

import { styled } from "@mui/system";

import Home from "@mui/icons-material/Home"
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

import MuiNextLink from "@components/MuiNextLink";

import BackToTop from "./BackToTop";
import HideOnScroll from "./HideOnScroll";
import Navbar from './Navbar';
import SideDrawer from "./SideDrawer";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const homeRedirect = process.env.NEXTAUTH_URL;

export const navLinks = [
    { title: `home`, path: `/` },
    { title: `about us`, path: `/about` },
    { title: `admin`, path: `/admin` },
    { title: `profile`, path: `/auth/profile` },
    { title: `contact`, path: `/contact` },
  ];

function Header () {
    const { data: session, loading } = useSession(); 
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleLoggedInClose = () => {
        setAnchorEl(null);
    }

    const handleLoggedInProfile = () => {
        setAnchorEl(null);
        router.push("/auth/profile");
    }

    const handleLoggedInClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        signIn();
    }

    async function handleSignOut(event) {
        event.preventDefault();
        const data = await signOut({redirect: false, callbackUrl: homeRedirect});
        router.push(data.url);
    }

  return (
    <>
    <HideOnScroll>
        <AppBar position="fixed">
            <Toolbar>
                <Container
                    maxWidth="lg"
                    sx={{ display: `flex`, justifyContent: `space-between` }}
                >
                    <IconButton edge="start" aria-label="home">
                        <MuiNextLink activeClassName="active" href="/">
                            <Home
                                sx={{
                                    color: (theme) => theme.palette.common.white,
                                }}
                                fontSize="large"
                            />
                        </MuiNextLink>
                    </IconButton>
                    <Navbar navLinks={navLinks} />

                    <nav>
                        {session && <>
                            <MuiNextLink variant="button" activeClassName="active" href="/admin" >
                            Admin Dashboard         
                            </MuiNextLink>
                        </>}

                        {!session && <>
                        <Button  
                            color="primary" 
                            variant="outlined" 
                            onClick={handleSignIn}
                            sx={{ my: 1, mx: 1.5 }}>
                            Login
                        </Button>
                        </>}

                        {session && <>
                            <Button 
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            color="primary" 
                            variant="outlined" 
                            onClick={handleLoggedInClick}
                            >
                            {session.user.email}
                            </Button>
                            <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleLoggedInClose}
                            >
                            <MenuItem onClick={handleLoggedInProfile}>Profile</MenuItem>
                            <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                            </Menu>
                        </>}
                        </nav>
                

                    <SideDrawer navLinks={navLinks} />
                </Container>
            </Toolbar>
        </AppBar>
    </HideOnScroll>
    <Offset id="back-to-top-anchor" />
    <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
            <KeyboardArrowUp />
        </Fab>
    </BackToTop>
    </>
  );
};

export default Header;
