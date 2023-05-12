import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../Post/Post.module.scss';

export const TagsCard = ({ title, imageUrl, text, id }) => {
    return (

        <Card variant="outlined" sx={{
            maxWidth: 345,
            borderRadius: 5,
            backgroundColor: '#ccc5c5',
            height: 420,
            paddingBottom: 20
        }}>

            <CardActionArea >
                <CardMedia
                    component="img"
                    height="240"
                    image={imageUrl}
                    alt={title}
                />
                <CardContent>

                    <Link className={styles.link} to={`/posts/${id}`}>
                        <Typography gutterBottom variant="h4" component="div">{title}
                        </Typography>
                    </Link>
                    <Typography color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}