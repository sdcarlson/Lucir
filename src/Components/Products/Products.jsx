import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from './Product/Product';
import useStyles from './styles';

import video from '../../assets/project.mp4';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <div className='hero-container'>   
        <video src={video} autoPlay loop muted />
        <div >
            <head>
                <link rel="stylesheet" href="src\App.css"/>
            </head>
            <main className={classes.content} style={{ backgroundColor: 'transparent' }}>
            <div id ="ContainerTitleBox">
            <h1 id = "productTitle">Handmade Liquid Bodysoap</h1>
            </div>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        < Grid item key={product.id} xs={10} sm={9} md={8} lg={4} > {/* xs = {12} means for mobile devices, grid takes up whole screen. sm, md and lg mean the same thing for larger devices respectively with 6/12 representing half the screen as an example*/}
                            < Product product={product} onAddToCart={onAddToCart} />
                        </ Grid>
                    ))}
                </Grid>

            </main>
            <div id = 'textBox'>
                <p id ="description"> Hand-crafted liquid bodywash.  Scented excellently with sensuous sandalwood rose fragrance. The most environmentally friendly soap feasible. We have tirelessly toiled to develope the finest, most luxurious, combination of ingredients. Vegan, Sulfate Free, Surfactant Free, Preservitive Free, Artificial Coloring Free, Minimal Carbon Emission, Perfectly Formulated. The Ultimate in Eco-Friendly beauty products. We plan to make this option even more environmentally friendly as we gain customers. Your purchase will provide for the development of a line of low-emission environmentally friendly cosmetics products.</p>
            </div>
        </div >
        </div>
    );
}

export default Products;