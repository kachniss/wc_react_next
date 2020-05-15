import Layout from '../components/Layout/Layout';
import fetch from 'isomorphic-unfetch';

import clientConfig from '../client-config';
import Product from '../components/Product/Product';
import styles from './index.module.scss';

const Index = (props) => {
    console.log(props);
    return (
        <div className='app'>
            <Layout>
                <div className={styles.productWrapper}>
                    {props.products.length && props.products.map((product, key) => <Product product={product} key={key} />)}
                </div>
            </Layout>

        </div>
    )
}

Index.getInitialProps = async () => {
    const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productsData = await res.json();
    return {
        products: productsData
    }
};

export default Index;