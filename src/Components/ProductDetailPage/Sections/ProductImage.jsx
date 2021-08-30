import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage({ product }) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (product.assets && product.assets.length > 0) {
            let images = [];

            product.assets && product.assets.map(item => {
                images.push({
                    original: item.url,
                    thumbnail: item.url
                })
            })
            setImages(images)
            console.log(product);
            console.log(images);
        }
    }, [product])

    return (
        < div >
            <ImageGallery items={Images} />
        </ div>
    )
}

export default ProductImage