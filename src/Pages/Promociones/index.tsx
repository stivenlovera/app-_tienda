import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from "@mui/material"
import StoreIcon from '@mui/icons-material/Store';
import { NavLink } from "react-router-dom";
import { CardView } from "../../Components/cards/CardView";
const prueba = {
    productos: [
        {
            titulo: "Tienda 1",
            imagen: "https://media.istockphoto.com/photos/market-items-for-sale-picture-id1195872412?k=20&m=1195872412&s=612x612&w=0&h=6-dU9NPQWcaDtHc5c2SYNJWoVrUJmYrK_EaCwOmlZWM=",
            nameImage: "trajes",
            descripcion: "promocion de 20 % en productos bla bla",
        },
        {
            titulo: "Tienda 2",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkusyhkNgbPprHUJF8AiCJkgFSSpU6ufX5Ra6JOt9dGg&s",
            nameImage: "trajes",
            descripcion: "promocion de 20 % en productos bla bla",
        },
        {
            titulo: "Tienda 1",
            imagen: "https://media.istockphoto.com/photos/market-items-for-sale-picture-id1195872412?k=20&m=1195872412&s=612x612&w=0&h=6-dU9NPQWcaDtHc5c2SYNJWoVrUJmYrK_EaCwOmlZWM=",
            nameImage: "trajes",
            descripcion: "promocion de 20 % en productos bla bla",
        },
        {
            titulo: "Tienda 2",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkusyhkNgbPprHUJF8AiCJkgFSSpU6ufX5Ra6JOt9dGg&s",
            nameImage: "trajes",
            descripcion: "promocion de 20 % en productos bla bla",
        },
        {
            titulo: "Tienda 1",
            imagen: "https://media.istockphoto.com/photos/market-items-for-sale-picture-id1195872412?k=20&m=1195872412&s=612x612&w=0&h=6-dU9NPQWcaDtHc5c2SYNJWoVrUJmYrK_EaCwOmlZWM=",
            nameImage: "trajes",
            descripcion: "promocion de 20 % en productos bla bla",
        },
        {
            titulo: "Tienda 2",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkusyhkNgbPprHUJF8AiCJkgFSSpU6ufX5Ra6JOt9dGg&s",
            nameImage: "trajes",
            descripcion: "promocion de 20 % en productos bla bla",
        }
    ]
}
export const Promotions = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Descuentos y promociones</Typography>
                    <Grid container spacing={3}>
                        {prueba.productos.map((producto, index) => (
                            <Grid
                                item
                                xs={12}
                                md={3}
                                lg={3}
                                key={index}
                            >
                                <CardView
                                    key={index}
                                    descripcion={producto.descripcion}
                                    imagen={producto.imagen}
                                    titulo={producto.titulo}
                                    nameImage={producto.nameImage}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default Promotions;