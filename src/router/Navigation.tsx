import { BrowserRouter, Route, Router, Link, NavLink, Routes, Navigate } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { routes } from './routes';
import { Nav } from '../Components/nav/nav';
import { Suspense } from 'react';
const mdTheme = createTheme();
export const Navigation = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <ThemeProvider theme={mdTheme}>
                    <div className='main-layout'>
                        <Nav
                            name="MI TIENDA"
                            routes={routes}
                        />
                        <Routes>
                            {
                                routes.map(({ Component, name, to, path }) => (
                                    <Route key={path} path={path} element={<Component />}></Route>
                                ))
                            }
                            <Route path="/*" element={<Navigate to={routes[0].to} replace />}></Route>
                        </Routes>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </Suspense>
    )
}