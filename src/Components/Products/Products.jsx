import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from './Product/Product';
import useStyles from './styles';



const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <div >
           
            <main className={classes.content} style={{ backgroundColor: '#cde0f7' }}>
            <h1>Handmade Liquid Bodysoap</h1>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        < Grid item key={product.id} xs={12} sm={6} md={4} lg={3} > {/* xs = {12} means for mobile devices, grid takes up whole screen. sm, md and lg mean the same thing for larger devices respectively with 6/12 representing half the screen as an example*/}
                            < Product product={product} onAddToCart={onAddToCart} />
                        </ Grid>
                    ))}
                </Grid>

            </main>
            <div>
                <p id ="about"> Hand-crafted liquid bodywash.  Scented excellently with sensuous sandalwood rose fragrance. The most environmentally friendly soap feasible. WE have tirelessly toiled to develope the finest, most luxious, combination of ingredients. Vegan, Sulfate Free, Surfactant Free, Preservitive Free, Artificial Coloring Free, Minimal Carbon Emission, Perfectly Formulated. The Ultimate in Eco-Friendly beauty products. We plan to make this option even more environmentally friendly as we gain customers. Your purchase will provide for the development of a line of low-emission environmentally friendly cosmetics products.</p>
            </div>
        </div >

    );
}

export default Products;