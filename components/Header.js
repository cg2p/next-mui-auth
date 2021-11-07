import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

import AppBar from "@mui/material/AppBar";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import Link from '@mui/material/Link';
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
    { title: `Dashboard`, path: `/admin` },
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
        signOut();
        router.push(homeRedirect);
    }

  return (
    <>
    <HideOnScroll>
    <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
           <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Container
                maxWidth="lg"
                sx={{ display: `flex`, justifyContent: `space-between` }}
            >
            <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                    <Home
                        sx={{
                            color: (theme) => theme.palette.common.black,
                        }}
                        fontSize="large"
                    />
                </MuiNextLink>
            </IconButton>
            <nav>
                {session && <>
                <Link
                    variant="button"
                    color="text.primary"
                    href="/admin"
                    sx={{ my: 1, mx: 1.5 }}
                    >
                    Dashboard
                </Link>
                </>}

                {!session && <>
                    <Button 
                        onClick={handleSignIn}
                        variant="outlined" 
                        sx={{ my: 1, mx: 1.5 }}>
                        Login
                    </Button>
                </>}

                {session && <>
                    <Button 
                        onClick={handleLoggedInClick}
                        variant="outlined" 
                        sx={{ my: 1, mx: 1.5 }}>
                        {session.user.name}
                    </Button>                            
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleLoggedInClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLoggedInProfile}>Profile</MenuItem>
                        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                    </Menu>
                </>}
                </nav>
            </Container>
            </Toolbar>
        </AppBar>
    </HideOnScroll>
    </>
  );
};

export default Header;

/*
    <Offset id="back-to-top-anchor" />
    <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
            <KeyboardArrowUp />
        </Fab>
    </BackToTop>

*/
