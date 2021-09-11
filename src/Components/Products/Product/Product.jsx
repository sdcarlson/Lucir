import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia component={Link} to={`/product/${product.id}`} className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography component={Link} to={`/product/${product.id}`} variant="h5" gutterBottom color="inherit">
                        {product.name}
                    </Typography>

                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </ Card >
    );
}

export default Product;
        /*
<Card className={classes.root}>
<CardMedia className={classes.media} image={product.image} title={product.name} />
<CardContent>
<div className={classes.CardContent}>
<Typography variant="h5" gutterBottom>
{product.name}
</Typography>
<Typography variant="h5">
{product.price}
</Typography>
</div>
<Typography variant="h2" color="textSecondary">{product.description}</Typography>
</CardContent>
<CardActions disableSpacing className={classes.CardActions}>
<IconButton aria-label="Add to Cart">
<AddShoppingCart />
</IconButton>
</CardActions>
</ Card >
*/