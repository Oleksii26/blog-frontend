import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../Post/Post.module.scss';
import clsx from 'clsx';

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
                    <Typography gutterBottom variant="h5" component="div">
                        <h5 className={clsx(styles.title)}>
                            <Link className={clsx(styles.title)} variant="h5" to={`/posts/${id}`}>{title}</Link>
                        </h5>
                    </Typography>
                    <Typography color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}