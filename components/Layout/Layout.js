import Head from 'next/head';
import Header from '../Header/Header';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Woocommerce - React - Next</title>
            </Head>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout;