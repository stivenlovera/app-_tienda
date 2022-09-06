import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, FormHelperText, Grid, Link, Paper, TextField, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ButtonLoading } from '../../Components/buttons/buttonLoading'
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import validate from 'validate.js';

interface LoginState {
    loading: boolean;
    form: {
        usuario: string,
        password: string
    },
    formErrors: {
        usuario: string[],
        password: string[],
    },
    intent:boolean
}
export const Registro = () => {
    const [{ loading, form, formErrors,intent }, setLoginState] = useState<LoginState>({
        loading: false,
        form: {
            password: "",
            usuario: ""
        },
        formErrors: {
            usuario: [],
            password: [],
        },
        intent:false
    });

    const FormRules = {
        usuario: {
            presence:
            {
                allowEmpty: false,
                message: "Usuario es requerido"
            },
            length: {
                minimum: 6,
                message: "Usuario debe ser mayor a 6 caracteres"
            }
        },
        password: {
            presence:
            {
                allowEmpty: false,
                message: "Contraseña es requerido"
            },
        }
    }

    const handleClick = () => {

    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var formValidation = validate(form, FormRules, { fullMessages: false });

        if (!formValidation) {
            setLoginState(({ form, formErrors }: LoginState) => ({
                loading: true,
                form: form,
                formErrors: formErrors,
                intent:true
            }));
            const data = new FormData(event.currentTarget);

            console.log({
                email: data.get('email'),
                password: data.get('password'),
            });
        } else {
            setLoginState(({ form,intent }: LoginState) => ({
                loading: false,
                form: form,
                formErrors: formValidation,
                intent:true
            }));
            console.log(formValidation);
        }
    };
    return (
        <>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Iniciar Session
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, pb: 0 }}>
                            <TextField
                                disabled={loading}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Usuario"
                                name="usuario"
                                autoComplete="email"
                                autoFocus
                                error={intent ? (formErrors.usuario ? true : false): false}
                                helperText={formErrors.usuario ? formErrors.usuario[0] : ""}
                                onChange={(e) => {
                                    setLoginState(({ form, loading, formErrors,intent }: LoginState) => ({
                                        loading: loading,
                                        form: {
                                            usuario: e.target.value,
                                            password: form.password,
                                        },
                                        formErrors: formErrors,
                                        intent:intent
                                    }));
                                }}
                            />
                            <TextField
                                disabled={loading}
                                margin="normal"
                                required
                                fullWidth
                                name="contraseña"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                error={intent ? (formErrors.password ? true : false): false}
                                helperText={formErrors.password ? formErrors.password[0] : ""}
                                onChange={(e) => {
                                    setLoginState(({ form, loading, formErrors,intent }: LoginState) => ({
                                        loading: loading,
                                        form: {
                                            usuario: form.usuario,
                                            password: e.target.value,
                                        },
                                        formErrors: formErrors,
                                        intent:intent
                                    }));
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" disabled={loading} />}
                                label="Recordar Contraseña"
                            />
                            <LoadingButton
                                color="secondary"
                                onClick={handleClick}
                                loading={loading}
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="contained"
                                type="submit"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Iniciar
                            </LoadingButton>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}