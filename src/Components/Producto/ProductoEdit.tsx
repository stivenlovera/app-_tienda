import { CardMedia, Container, Grid, Paper, Card, CardActionArea, CardContent, Typography } from "@mui/material"

export const ProductoView = () => {

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="https://imagenes.elpais.com/resizer/ryevQH9zuVp3iNLOBE2pglh2b6s=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WL6ABAHFPDO7VD2UUAEIV2QG3M.jpg"
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="https://www.nailistas.com/wp-content/uploads/2014/04/ulabox-beauty-box-01.jpg"
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="https://www.nailistas.com/wp-content/uploads/2014/04/ulabox-beauty-box-01.jpg"
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card >
                                    <CardActionArea
                                    >
                                        <CardMedia
                                            component="img"
                                            image="https://www.nailistas.com/wp-content/uploads/2014/04/ulabox-beauty-box-01.jpg"
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="https://www.nailistas.com/wp-content/uploads/2014/04/ulabox-beauty-box-01.jpg"
                                            alt="green iguana"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 250,
                                    }}
                                >
                                    <Typography gutterBottom variant="h6" component="div">
                                        descripcion breve del proveedor o producto
                                    </Typography>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Nombre Producto
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 250,
                                    }}
                                >
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <h3>precio</h3>
                                            <p><del>antes</del></p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <h6> seccion de botones </h6>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}