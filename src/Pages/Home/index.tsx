import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from "@mui/material"
import StoreIcon from '@mui/icons-material/Store';
export const Home = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
                    <Typography variant="h5">Bienvenido</Typography>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={12} lg={12}>

                            <Card sx={{ maxWidth: 1200 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://thumbs.dreamstime.com/z/encabezado-de-banner-concepto-promoci%C3%B3n-ventas-venta-compras-oferta-descuento-programa-fidelidad-marketing-atracci%C3%B3n-clientes-162417364.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       Aprovecha los descuentos y promociones
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={3} lg={3}>
                            <CardActionArea>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://media.istockphoto.com/photos/market-items-for-sale-picture-id1195872412?k=20&m=1195872412&s=612x612&w=0&h=6-dU9NPQWcaDtHc5c2SYNJWoVrUJmYrK_EaCwOmlZWM="
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" fontSize={20}>
                                            128.00 Bs. <small>Antes </small><del>150 Bs.</del>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Promocion de 30% descuento
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        {/* <Button title="titulo"
                                        variant="contained"
                                        style={{ textTransform: 'none' }}
                                        startIcon={<StoreIcon />}> Ver</Button> */}
                                        {/* <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                                        Añadir
                                    </Button> */}
                                    </CardActions>
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default Home;