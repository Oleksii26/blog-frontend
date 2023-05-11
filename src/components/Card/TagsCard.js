import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const TagsCard = ({ title }) => {
    return (
        <Card sx={{ maxWidth: 345, border: 1 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.prom.ua/3004456278_w1280_h1280_d_108_a.png?fresh=1"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}