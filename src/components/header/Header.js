import React, { useState } from "react";
import { AppBar, Container, Toolbar, Typography, createTheme, Button, Box, ThemeProvider } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [activeLinkId, setActiveLinkId] = useState();
    const checkIfActive = (id) => {
        return activeLinkId === id;
    }
    const activateEl = (e) => {
        setActiveLinkId(e.currentTarget.id);
    }
    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 15,
                        textTransform: "capitalize",
                    }
                },
                defaultProps: {
                    disableRipple: true,
                },
                variants: [
                    {
                        props: { variant: 'navbar' },
                        style: {
                            color: "white",
                            "&:hover": {
                                background: "rgb(37, 47, 57)",
                            },
                            "&:active": {
                                background: "rgba(215, 182, 93, 0.3)",
                                color: "black"
                            },
                            "&.active-navbar-btn": {
                                background: "rgba(215, 182, 93, 0.8)",
                                color: "black"
                            }
                        }
                    },
                    {
                        props: {variant: "authentication"},
                        style: {
                            color: "#D7B65D",
                            border: "2px solid #F1B500",
                            "&:hover": {
                                background: "rgba(215, 182, 93, 0.3)",
                                borderColor: "transparent"
                            },
                        }
                    }
                ],
            },
        },
        typography: {
            fontFamily: [
              'Quicksand',
              'Roboto',
              'sans-serif',
            ].join(','),
        }
    })


    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{backgroundColor: "#192026"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "100px",
                        height: 80,
                        marginBottom: "10px",
                    }}>
                        <NavLink to="/" className="navbar-link" id="home" onClick={activateEl}>
                            <Typography
                                variant="h4"
                                noWrap
                                className="logo-text"
                            >
                                <DirectionsCarIcon />Logo
                            </Typography>
                        </NavLink>
                        <Box sx={{display: "flex", gap: 6, alignItems: "center"}}>
                            <NavLink to="/services" className="navbar-link">
                                <Button variant="navbar" id="services" onClick={activateEl} className={`${checkIfActive("services") ? "active-navbar-btn" : ""}`}>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                    >
                                        Services
                                    </Typography>
                                </Button>
                            </NavLink>
                            <NavLink to="/catalogue" className="navbar-link">
                                <Button variant="navbar" id="catalogue" onClick={activateEl} className={`${checkIfActive("catalogue") ? "active-navbar-btn" : ""}`}>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                    >
                                        Catalogue 
                                    </Typography>
                                </Button>
                            </NavLink>
                            <NavLink to="/about" className="navbar-link">
                                <Button variant="navbar" id="btn3" onClick={activateEl} className={`${checkIfActive("btn3") ? "active-navbar-btn" : ""}`}>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                    >
                                        About Us
                                    </Typography>
                                </Button>
                            </NavLink>
                            <NavLink to="/contact-us" className="navbar-link">
                                <Button variant="navbar" id="btn4" onClick={activateEl} className={`${checkIfActive("btn4") ? "active-navbar-btn" : ""}`}>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                    >
                                        Contact Us
                                    </Typography>
                                </Button>
                            </NavLink>
                        </Box>
                        <Box sx={{display: "flex", gap: 3}}>
                            <NavLink to="/recommended" className="navbar-link">
                                <Button variant="authentication" onClick={activateEl}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                    >
                                        Sign in 
                                    </Typography>
                                </Button>
                            </NavLink>
                            <NavLink to="/recommended" className="navbar-link">
                                <Button variant="authentication" onClick={activateEl}>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                    >
                                        Sign up
                                    </Typography>
                                </Button>
                            </NavLink>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
};

export default Header;