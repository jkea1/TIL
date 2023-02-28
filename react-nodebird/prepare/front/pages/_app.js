import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.min.css';
import wrapper from '../store/configureStore';

//App이 index.js의 부모가 된다. 
//component에는 index.js의 return 부분이 들어간다. 
const NodeBird = ({Component}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

//props가 있을때는 점검을 해 주면 서비의 안정서이 올라간다. 
NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);