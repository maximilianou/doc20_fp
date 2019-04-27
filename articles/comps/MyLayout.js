import Header from './Header';
import { Provider } from 'react-redux';
//import store from '../store/index';
import { Container } from 'next/app'
import withReduxStore from '../lib/with-redux-store'


const layoutStyle = {
    margin: 10,
    padding: 10,
    border: '1px solid #EEE'
};

const withLayout = Page => {
  const { Component, pageProps, reduxStore } = this.props;
  return () => (withReduxStore(
    <Container>
        <Provider store={reduxStore} style={layoutStyle}>
          <Header />
          <Page />
        </Provider>
    </Container>)
  )
};

export default withLayout;
