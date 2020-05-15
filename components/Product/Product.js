import styles from './Product.module.scss';
import ReactHtmlParser from 'react-html-parser';
import { Button } from 'react-bootstrap';


const Product = (props) => {
    console.log(styles);
    const { product } = props;
    return (
        <div className={styles.singleProduct}>
            <div className={styles.img}>
                {product.images.length && <img src={product.images[0].src} alt='Product Image' />}
            </div>

            <div className={styles.content}>
                {product.categories.length && <h3>{product.categories[0].name}</h3>}
                <h2>{product.name}</h2>

                <div>{ReactHtmlParser(product.description)}</div>

                <div className={styles.price}>
                    ${product.price}
                </div>

                <Button variant='primary' href=''>View</Button>

            </div>

        </div>
    )
};

export default Product;