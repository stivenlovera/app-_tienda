import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Navigate, NavLink } from 'react-router-dom';
import { Route } from '../../router/routes'

interface Props {
    routes: Route[];
    name: string;
}
export const Nav = ({ name, routes }: Props) => {
    console.log(name);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <MenuItem
                        onClick={() => {

                        }}
                    >
                        <Typography textAlign="center">{name}</Typography>
                    </MenuItem>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {
                            routes.map(({ Component, name, to, path }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    style={{ textDecoration: "none", color: "white" }}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >
                                    <MenuItem
                                        onClick={() => {
                                            console.log(name)
                                        }}>
                                        <Typography
                                            textAlign="center">
                                            {name}
                                        </Typography>
                                    </MenuItem>
                                </NavLink>
                            ))
                        }
                    </Box>
                    <MenuItem
                        disabled={true}
                        onClick={() => {
                            console.log("otros")
                        }}>
                        <Typography textAlign="center">otros</Typography>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </Box>
    );
}