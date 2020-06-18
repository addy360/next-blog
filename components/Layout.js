import Head from 'next/head';

import Navbar from './Navbar';

import './layout.module.css';

const Layout = props => {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/spacelab/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sIQOcNYer0kt7oTyFe/YrGzKMFP/qxsJbXTxq0/uiZQgpwXwEu41sVz2M61lWbai"
          crossOrigin="anonymous"
        ></link>
        <title>Blog By nextjs</title>
      </Head>
      <Navbar />
      <div className="main">{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
