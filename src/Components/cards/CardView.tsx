import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { NavLink } from "react-router-dom";
interface Grid {
    xs: number;
    md: number;
    lg: number;
}
interface Props {
    key: number;
    imagen: string;
    nameImage: string;
    titulo: string;
    descripcion: string;
}
export const CardView = ({ descripcion, nameImage, titulo, imagen }: Props) => {
    return (
        <NavLink
           
            to="/"
            style={{ textDecoration: "none", color: "white" }}
            className={({ isActive }) => isActive ? 'nav-active' : ''}
        >
            <Card sx={{ maxWidth: 1200 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imagen}
                    alt={nameImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descripcion}
                    </Typography>
                </CardContent>

            </Card>
        </NavLink>
    )
}