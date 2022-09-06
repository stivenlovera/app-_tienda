import { CardMedia, Container, Grid, Paper, Card, CardActionArea, CardContent, Typography, TextField, FormControl, Input, InputLabel } from "@mui/material"
import Autocomplete from '@mui/material/Autocomplete';
import { RecordImagen } from "../RecordImagen/recordImages";
export const ProductoView = () => {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
            label: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 },
        { label: 'Fight Club', year: 1999 },
        {
            label: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },
        {
            label: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
        },
        { label: 'Forrest Gump', year: 1994 },
        { label: 'Inception', year: 2010 },
        {
            label: 'The Lord of the Rings: The Two Towers',
            year: 2002,
        },
        { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { label: 'Goodfellas', year: 1990 },
        { label: 'The Matrix', year: 1999 },
        { label: 'Seven Samurai', year: 1954 },
        { label: 'Reservoir Dogs', year: 1992 },
        { label: 'Braveheart', year: 1995 },
        { label: 'M', year: 1931 },
        { label: 'Requiem for a Dream', year: 2000 },
        { label: 'Amélie', year: 2001 },
        { label: 'A Clockwork Orange', year: 1971 },
        { label: 'Like Stars on Earth', year: 2007 },
        { label: 'Taxi Driver', year: 1976 },
        { label: 'Lawrence of Arabia', year: 1962 },
        { label: 'Double Indemnity', year: 1944 },
        {
            label: 'Eternal Sunshine of the Spotless Mind',
            year: 2004,
        },
        { label: 'Amadeus', year: 1984 },
    ];
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={6} lg={6}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={top100Films}
                                        renderInput={(params) => <TextField {...params} label="Seleccione categoria" />}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6} lg={6}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={top100Films}
                                        renderInput={(params) => <TextField {...params} label="Seleccione sub-categoria" />}
                                    />
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>
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
                                <Card
                                    onClick={
                                        (e) => {
                                            console.log('click')
                                        }
                                    }>
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
                                    <FormControl
                                        variant="standard"
                                        sx={{ mb: 2 }}
                                    >
                                        <InputLabel htmlFor="component-simple">Nombre de marca o proveedor</InputLabel>
                                        <Input id="component-simple" />
                                    </FormControl>
                                    <FormControl
                                        variant="standard"
                                        sx={{ mb: 2 }}
                                        size={'small'}
                                    >
                                        <InputLabel
                                            htmlFor="component-simple"
                                        >
                                            Nombre de producto
                                        </InputLabel>
                                        <Input
                                            id="component-simple"
                                            multiline
                                            rows={2}
                                            style={{
                                                fontSize: 20,

                                            }}
                                        />
                                    </FormControl>
                                    <FormControl
                                        variant="standard"
                                        sx={{ mb: 2 }}
                                    >
                                        <InputLabel
                                            htmlFor="component-simple"
                                        >
                                            Descripcion
                                        </InputLabel>
                                        <Input
                                            multiline
                                            rows={3}
                                            id="component-simple"
                                        />
                                    </FormControl>
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
            <RecordImagen
            
            ></RecordImagen>
        </>
    )
}
export default ProductoView;