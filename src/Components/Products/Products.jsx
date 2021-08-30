import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from './Product/Product';
import useStyles from './styles';



const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <div >
            <main className={classes.content} style={{ backgroundColor: '#cde0f7' }}>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        < Grid item key={product.id} xs={12} sm={6} md={4} lg={3} > {/* xs = {12} means for mobile devices, grid takes up whole screen. sm, md and lg mean the same thing for larger devices respectively with 6/12 representing half the screen as an example*/}
                            < Product product={product} onAddToCart={onAddToCart} />
                        </ Grid>
                    ))}
                </Grid>

            </main>
        </div >

    );
}

export default Products;