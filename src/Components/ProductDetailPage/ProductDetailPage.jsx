<<<<<<< HEAD
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
            <div style={{display: 'flex', justifyContent: 'center', fontFamily: "Helvetica Neue" }} >
                <h1>{product.name}</h1>
            </div>
            <div id = "freeTextBox">
            <p>This is the launch of our limited production original body soap formulation. It is a delightfully aromated, naturally amber hued, sex-neutral body wash. This liquid soap is created with natural oils and bottled in American-made bottles. Lucir soap has a very short ingredient list. Since we elected not to include artificial surfactant ingredients, it foams less than over-processed sulfate based body soaps, and applies instead as a cool cream-like lather. This soap will feel better than any chimera-chemical monstrosity that has been synthesized by penny scraping industrialists. Our natural oils will leave your skin feeling cleansed and moisturized. We would rather use high grade coconut oil than overprocessed sodium sulfates and sulfonates any day, for the Earth, and now you can too. </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="mintcream" className={classes.button} endIcon={<ShoppingCart />} onClick={() => onAddToCart(product.id, 1)} >
                    Add to cart
                </Button>
            </div>


            <br />
        </div >
    )
}

export default ProductDetailPage;
=======
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
            <p id="about">This is the launch of our limited production original body soap formulation. It is a delightfully aromated, naturally amber hued, sex-neutral body wash. Since we elected not to include artificial surfactant ingredients, it foams less than over-processed sulfate based body soaps, and applies instead as a cool cream-like lather. The natural oils will leave your skin feeling cleansed and moisturized.</p>
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
>>>>>>> origin/main
