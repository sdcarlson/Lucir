import React, { useEffect, useState } from 'react'
import useStyles from './styles';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


function ProductDetailPage({ products, onAddToCart }) {
    const params = useParams();
    const classes = useStyles();
    const productId = params.productId;
    const [product, setProduct] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const product = products.find(product => product.id === productId);
        setProduct(product);
        console.log(product);
        setIsLoaded(true);
    }, [])

    if (!isLoaded) return 'Loading...'

    return (
        <div>
            <div className={classes.toolbar} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={!isLoaded ? '' : product.media.source} style={{ width: 300 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', fontFamily: "Helvetica Neue" }} >
                <h1>{product.name}</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="secondary" className={classes.button} endIcon={<ShoppingCart />} onClick={() => onAddToCart(product.id, 1)} >
                    Add to cart
                </Button>
            </div>


            <br />
        </div >
    )
}

export default ProductDetailPage;
